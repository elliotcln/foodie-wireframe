<script>
  import { onMount } from "svelte";
  import Siema from "siema";
  import OpinionItem from "./OpinionsItem.svelte";
  import OpinionsControls from "./OpinionsControls.svelte";
  import opinions from "../../json/opinions.json";

  onMount(() => {
    let opinionsSelector = null;
    const initSiema = function () {
      let nbItems = 1;
      if (window.innerWidth > 640) {
        nbItems = 2;
      }
      if (window.innerWidth > 1024) {
        nbItems = 3;
      }

      opinionsSelector = new Siema({
        selector: ".opinions",
        perPage: nbItems,
        loop: true,
      });
    };

    initSiema();
    window.addEventListener("resize", () => {
      opinionsSelector.destroy(true);
      initSiema();
    });
    // siema controls
    const prev = document.querySelector(".js-opinions-prev");
    prev.addEventListener("click", () => opinionsSelector.prev());
    const next = document.querySelector(".js-opinions-next");
    next.addEventListener("click", () => opinionsSelector.next());
  });
</script>

<section class="section-opinions" id="section-opinions">
  <div class="container">
    <h2 class="mb-16 text-center text-3xl font-bold text-yellow-100">
      Ils ont laissé leur avis
    </h2>
    <ul class="opinions">
      {#each opinions as op}
        <OpinionItem {...op} />
      {/each}
    </ul>
    <OpinionsControls />
  </div>
</section>
