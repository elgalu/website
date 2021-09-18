<script lang="ts">
  import type { ContactAction } from "../../types/contact-action.type";

  export let action: ContactAction;
  const { icon, title, text, link } = action;
</script>

<div class="bg-white w-80 rounded-4xl px-xx-small py-not-huge mt-small">
  <img src="/svg/contact/{icon}" alt={title} class="mx-auto h-28" />
  <h2 class="h4">{title}</h2>
  <p class="mt-micro mb-xx-small">{text}</p>
  <a href={link.href} class="btn-primary">{link.text}</a>
</div>
