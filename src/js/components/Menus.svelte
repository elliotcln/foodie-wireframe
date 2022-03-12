<script>
  import Menus from "../../json/menus.json";
  import Plate from "./Plate.svelte";

  let selectedTabIndex = 0;

  function changeIndex(index) {
    if (selectedTabIndex === index) {
      index = -1;
    }
    selectedTabIndex = index;
  }
</script>

<section class="section-menu" id="section-menu">
  <div class="container">
    <div class="mx-auto max-w-5xl">
      <h2 class="text-3xl font-bold">Notre carte</h2>
      <p class="text-gray-600">
        Découvrez notre carte et ses produits du coin.
      </p>
      <div class="menu-accordion mt-8">
        {#each Menus as menu, index}
          <h3 class={selectedTabIndex === index ? "is-expanded" : null}>
            <button
              aria-expanded={selectedTabIndex === index ? true : false}
              aria-controls="accordion-region__{index}"
              id="accordion-item__{index}"
              on:click={() => {
                changeIndex(index);
              }}
            >
              <span>{menu.title} <small>({menu.plates.length})</small></span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </h3>
          <div
            role="region"
            id="accordion-region__{index}"
            aria-labelledby="accordion-item__{index}"
          >
            {#each menu.plates as plate}
              <Plate {...plate} />
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
