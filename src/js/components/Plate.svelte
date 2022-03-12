<script>
  export let title,
    price,
    desc = null;
</script>

<div>
  <div class="flex items-start gap-4">
    <span
      class="max-w-[70%] flex-shrink-0 font-serif font-semibold laptop:max-w-[100%]"
      >{title}</span
    >
    <span class="mt-3 w-full border-b border-dotted border-gray-300" />
    <span class="flex-shrink-0 font-bold">{price}€</span>
  </div>
  {#if desc}
    <p class="text-sm text-gray-700">{desc}</p>
  {/if}
</div>
