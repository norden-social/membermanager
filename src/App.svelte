<script>
  let username = "";
  let password = "";
  let rows = [];
  let error = "";

  async function fetchData() {
    const authString = `${username}:${password}`;
    const encodedAuthString = btoa(authString);

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
      // Filter rows to only include those with a date in columnId 27 that is older than one year
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
      error = "";
    } catch (err) {
      error = err.message;
    }
  }
</script>

<main>
  <h1>Überfällige Zahlungen</h1>
  <div>
    <label>
      Benutzername:
      <input type="text" bind:value={username} />
    </label>
    <label>
      Passwort:
      <input type="password" bind:value={password} />
    </label>
    <center><button on:click={fetchData}>Daten laden</button></center>
  </div>
  
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}

  {#if rows.length > 0}
    <ul>
      {#each rows as row}
        <li>
          <p>
            {#each row.data as column}
              {#if column.columnId === 20}
                {column.value}
              {/if}
            {/each}
          </p>
          <p>
            {#each row.data as column}
              {#if column.columnId === 27}
                Letzte Zahlung: {column.value}
              {/if}
            {/each}
          </p>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 1rem;
  }
  h1 {
    color: #333;
  }
  div {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
  button {
    display: block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  p {
    margin: 0.5rem 0;
  }
</style>
