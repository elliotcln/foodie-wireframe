<script>
  import Masonry from "masonry-layout";
  import imagesLoaded from "imagesloaded";
  import { onMount } from "svelte";
  import g01 from "../../images/gallery/01.jpg";
  import g02 from "../../images/gallery/02.jpg";
  import g03 from "../../images/gallery/03.jpg";
  import g04 from "../../images/gallery/04.jpg";
  import g05 from "../../images/gallery/05.jpg";
  import g06 from "../../images/gallery/06.jpg";
  import g07 from "../../images/gallery/07.jpg";
  import g08 from "../../images/gallery/08.jpg";
  import g09 from "../../images/gallery/09.jpg";

  const GalleryItems = [g01, g02, g03, g04, g05, g06, g07, g08, g09];
  onMount(() => {
    const container = document.querySelector(".gallery");
    imagesLoaded(container, () => {
      const gallery = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: ".grid-sizer",
        gutter: ".grid-gutter",
        percentPosition: true,
      });
    });
  });
</script>

<section class="section-gallery  py-20" id="section-gallery">
  <div class="container">
    <h2 class="sr-only">Galerie photos</h2>
    <div class="gallery">
      <div class="grid-sizer" />
      <div class="grid-gutter" />
      {#each GalleryItems as item}
        <div class="gallery-item">
          <img src={item} alt="" />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  :root {
    --nbElements: 4;
    --gutter: 1rem;
  }
  @media (max-width: 1024px) {
    :root {
      --nbElements: 2;
    }
  }
  .grid-sizer,
  .gallery-item {
    width: calc((100% / var(--nbElements)) - var(--gutter));
  }
  .gallery-item {
    margin-bottom: var(--gutter);
  }
  .grid-gutter {
    width: var(--gutter);
  }
</style>
