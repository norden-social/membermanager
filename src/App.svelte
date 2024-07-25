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

  async function fetchData() {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    const authString = `${username}:${password}`;
    const encodedAuthString = btoa(authString);

    loading = true;
    error = "";
    rows = [];
    try {
      const response = await fetch("https://cloud.norden.social/apps/tables/api/1/tables/4/rows", {
        headers: {
          "Authorization": `Basic ${encodedAuthString}`
        }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      
      rows = data.filter(row => {
        const dateColumn = row.data.find(column => column.columnId === 27);
        if (dateColumn && dateColumn.value) {
          const paymentDate = new Date(dateColumn.value);
          return paymentDate < oneYearAgo;
        }
        return false;
      });
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
</script>

<main>
  <h1>Überfällige Zahlungen</h1>
  {#if rows.length <= 0}
    <Form bind:username bind:password {fetchData} />
    {#if loading}
      <Loading />
    {/if}
  {/if}
  
  {#if error}
    <Error {error} />
  {/if}

  {#if rows.length > 0}
    <RowList {rows} />
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
</style>
