
<script>
  import Navbar from '../ui/presentational/Navbar.svelte';
  import Footer from '../ui/presentational/Footer.svelte';
  import MicroCard from '../ui/presentational/MicroCard.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
</script>

<Navbar />

<main class="container py-4">
  {#if $page.url.pathname === '/'}
    <div class="row justify-content-center gap-3">
      <MicroCard 
        title="Noticias" 
        summary="Últimas novedades y avisos."
        on:click={() => goto('/noticias')}
      />
      <MicroCard 
        title="Edictos"
        summary="Consulta los edictos oficiales."
        on:click={() => goto('/edictos')}
      />
      <MicroCard 
        title="Mi Perfil"
        summary="Gestiona tus datos y configuración."
        on:click={() => goto('/perfil')}
      />
    </div>
  {:else if $page.url.pathname.startsWith('/noticias')}
    <!-- Aquí se montaría el microfrontend NoticiasApp -->
    <h2>NoticiasApp (microfrontend)</h2>
  {:else if $page.url.pathname.startsWith('/edictos')}
    <!-- Aquí se montaría el microfrontend EdictosApp -->
    <h2>EdictosApp (microfrontend)</h2>
  {:else if $page.url.pathname.startsWith('/perfil')}
    <!-- Aquí se montaría el microfrontend PerfilApp -->
    <h2>PerfilApp (microfrontend)</h2>
  {:else}
    <h1>Página no encontrada</h1>
  {/if}
</main>

<Footer />
