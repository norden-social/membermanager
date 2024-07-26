<script>
  export let username;
  export let password;
  export let fetchData;

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }
</script>

<form on:submit={handleSubmit}>
  <div class="form-group">
    <label for="username">Benutzername:</label>
    <input id="username" type="text" bind:value={username} />
  </div>
  <div class="form-group">
    <label for="password">Passwort:</label>
    <input id="password" type="password" bind:value={password} />
  </div>
  <center><button type="submit">Daten laden</button></center>
</form>

<style>
  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: calc(100% - 2rem);
    padding: 0.5rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
