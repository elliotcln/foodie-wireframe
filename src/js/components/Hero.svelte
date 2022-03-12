<script>
  import HeroImage from "../../images/hero-img--02.jpg";

  const title = "Pas seulement une brasserie, une expérience";
  const buttonTitle = "Consulter notre menu";
</script>

<div class="hero">
  <img src={HeroImage} alt="" />
  <div class="hero-container container pt-24 desktop:pt-40">
    <p
      class="mb-4 inline-flex items-center text-xs font-bold uppercase text-gray-400"
    >
      <span class="mr-2 inline-block h-2 w-2 rounded-full bg-green-300" />
      Nous sommes ouverts
    </p>
    <h1 class="max-w-xl text-5xl font-bold">{title}</h1>
    <a href="#section-menu" class="button is-gold mt-8"
      ><span>{buttonTitle}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  </div>
</div>
