<script>
  export let rows;

  function parseLink(columnValue) {
    try {
      return JSON.parse(columnValue).value;
    } catch {
      return null;
    }
  }

  function getColumnValue(row, columnId) {
    const column = row.data.find(col => col.columnId === columnId);
    return column ? column.value : null;
  }
</script>

<ul>
  {#each rows as row}
    <li>
      <h2><strong>{getColumnValue(row, 20)}</strong></h2>
      <p>
        <a href="mailto:{getColumnValue(row, 22)}" target="_blank">{getColumnValue(row, 22)}</a>
      </p>
      <p>
        {#if getColumnValue(row, 23)}
          <a href="{parseLink(getColumnValue(row, 23))}" target="_blank">{parseLink(getColumnValue(row, 23))}</a>
        {/if}
      </p>
      <p>
        <i>Letzte Zahlung: {new Date(getColumnValue(row, 27)).toLocaleDateString()}</i>
      </p>
    </li>
  {/each}
</ul>

<style>
  h2 {
    margin: 0;
    padding: 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #f9f9f9;
  }
  li p {
    margin: 0.5rem 0;
  }
</style>
