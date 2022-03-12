<script>
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";
  import Presentation from "./components/Presentation.svelte";
  import Menus from "./components/Menus.svelte";
  import Opinions from "./components/Opinions.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<header role="banner" class="">
  <div class="container">
    <Navbar />
  </div>
</header>

<main role="main">
  <Hero />
  <Presentation />
  <Menus />
  <Gallery />
  <Opinions />
</main>

<footer id="footer" role="contentinfo" class="footer">
  <div class="container">
    <Footer />
  </div>
</footer>
