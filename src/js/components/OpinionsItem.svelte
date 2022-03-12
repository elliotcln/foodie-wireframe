<script>
  export let opinion,
    author,
    date = null;
</script>

<li class="opinions-item">
  <figure>
    <blockquote>
      <p>
        {opinion}
      </p>
    </blockquote>
    <figcaption>
      {author}
      {#if date}
        <cite>{date}</cite>
      {/if}
    </figcaption>
  </figure>
</li>
