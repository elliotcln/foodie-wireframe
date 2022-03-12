<script>
  import Logo from "../../images/logo-01.svg";

  let isOpen = false;
  function toggleNavbar() {
    isOpen = !isOpen;
  }
</script>

<div class="navbar-wrapper">
  <a href="#" class="brand">
    <img src={Logo} alt="Logo Ipsum" />
  </a>
  <nav aria-label="Navigation principale" class="navbar">
    <button
      class="button"
      on:click={() => {
        toggleNavbar();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
    <ul class={isOpen ? "is-open" : null}>
      <li><a href="#title-presentation">L'établissement</a></li>
      <li><a href="#section-menu">Menus</a></li>
      <li><a href="#section-opinions">Avis</a></li>
      <li><a href="#section-gallery">Photos</a></li>
    </ul>
    <div class="navbar__controls">
      <a href="#footer" class="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Réserver une table</span></a
      >
    </div>
  </nav>
</div>
