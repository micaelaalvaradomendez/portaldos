<!-- MicroCard.svelte -->
<script>
  export let title;
  export let summary;
  export let onClick = () => {};
</script>
<div class="microcard card mb-3">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p class="card-text">{summary}</p>
    <button class="btn btn-primary" on:click={onClick}>Ingresar</button>
  </div>
</div>
<style>
.microcard { min-width: 220px; max-width: 350px; }
</style>
