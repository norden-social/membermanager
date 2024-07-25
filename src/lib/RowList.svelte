<script>
    export let rows;
  
    function parseLink(columnValue) {
      try {
        return JSON.parse(columnValue).value;
      } catch (e) {
        return null;
      }
    }
  </script>
  
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
            {#if column.columnId === 23}
              {#if column.value}
                <a href="{parseLink(column.value)}" target="_blank">{parseLink(column.value)}</a>
              {/if}
            {/if}
          {/each}
        </p>
        <p>
          {#each row.data as column}
            {#if column.columnId === 27}
              Letzte Zahlung: {new Date(column.value).toLocaleDateString()}
            {/if}
          {/each}
        </p>
      </li>
    {/each}
  </ul>
  
  <style>
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
  