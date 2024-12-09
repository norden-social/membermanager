<script>
  import Form from './lib/Form.svelte';
  import Loading from './lib/Loading.svelte';
  import Error from './lib/Error.svelte';
  import RowList from './lib/RowList.svelte';

  let username = localStorage.getItem('username') || "";
  let password = localStorage.getItem('password') || "";
  let rows = [];
  let error = "";
  let loading = false;
  let noOverduePayments = false; // Zusätzliche Variable, um die UI-Logik zu steuern.

  const saveCredentials = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  const encodeAuth = (username, password) => btoa(`${username}:${password}`);

  const isPaymentOverdue = (paymentDate) => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return paymentDate < oneYearAgo;
  };

  const fetchData = async () => {
    saveCredentials();
    const encodedAuthString = encodeAuth(username, password);

    loading = true;
    error = "";
    rows = [];
    noOverduePayments = false;

    try {
      const response = await fetch(
        "https://cloud.norden.social/apps/tables/api/1/tables/4/rows",
        {
          headers: {
            Authorization: `Basic ${encodedAuthString}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      rows = data.filter((row) => {
        const dateColumn = row.data.find((column) => column.columnId === 27);
        if (dateColumn?.value) {
          const paymentDate = new Date(dateColumn.value);
          return isPaymentOverdue(paymentDate);
        }
        return false;
      });

      // Überprüfen, ob es tatsächlich überfällige Zahlungen gibt.
      if (rows.length === 0) {
        noOverduePayments = true;
      }
    } catch (err) {
      error = err.message || 'Ein unbekannter Fehler ist aufgetreten.';
    } finally {
      loading = false;
    }
  };
</script>

<main>
  <h1>Überfällige Zahlungen</h1>

  <!-- Lade-Formular wenn noch keine Daten geladen wurden -->
  {#if rows.length === 0 && !loading}
    <Form bind:username bind:password {fetchData} />
  {/if}

  <!-- Lade-Animation -->
  {#if loading}
    <Loading />
  {/if}

  <!-- Fehleranzeige bei einem Problem -->
  {#if error}
    <Error error={error} />
  {/if}

  <!-- Zeige die Zahlungen nur, wenn vorhanden -->
  {#if rows.length > 0}
    <RowList {rows} />
  {/if}

  <!-- Nachricht, wenn keine Zahlungen überfällig sind -->
  {#if noOverduePayments}
    <p class="no-payments">Es sind keine Zahlungen überfällig.</p>
  {/if}
</main>

<style>
  main {
    max-width: 800px;
    margin: auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .no-payments {
    text-align: center;
    color: green;
    font-weight: bold;
    margin-top: 1rem;
  }
</style>
