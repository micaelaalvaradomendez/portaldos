
<script>
  import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Portal Shell</a>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link { $page.url.pathname === '/' ? 'active' : '' }" href="/">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link { $page.url.pathname.startsWith('/noticias') ? 'active' : '' }" href="/noticias">Noticias</a>
      </li>
      <li class="nav-item">
        <a class="nav-link { $page.url.pathname.startsWith('/edictos') ? 'active' : '' }" href="/edictos">Edictos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link { $page.url.pathname.startsWith('/perfil') ? 'active' : '' }" href="/perfil">Mi Perfil</a>
      </li>
    </ul>
  </div>
</nav>
