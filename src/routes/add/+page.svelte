<script lang="ts">
	import { json } from '@sveltejs/kit';
  let a = 0;
  let b = 0;
  let total = 0;
  
  async function add() {
    const response = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({ a, b }),
      headers: {
        'content-type': 'application/json',
      },
    });
    total = await response.json();
  }

</script>

<input type="number" bind:value={a}> + <input type="number" bind:value={b}> = {total}
<br/>
{a}
{b}
<br/>

<button on:click={add}>Calculate</button>

