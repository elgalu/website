<script>
  import Section from "../section.svelte";

  const actions = [
    {
      title: "Security Vulnerability Disclosure Policy",
      description:
        "We welcome feedback from security researchers and the general public to help improve our security.",
      link: {
        href: "/",
        text: "View report process",
      },
    },
    {
      title: "Thanks",
      description:
        "Big thanks the following people who responsibly disclosed their security findings.",
      link: {
        href: "/",
        text: "View contributors",
      },
    },
  ];
</script>

<Section>
  <div class="flex justify-between max-w-3xl mx-auto">
    {#each actions as a}
      <div class="max-w-xs">
        <h2 class="h3">{a.title}</h2>
        <p class="my-x-small">
          {a.description}
        </p>
        <a href={a.link.href} class="btn-primary">{a.link.text}</a>
      </div>
    {/each}
  </div>
</Section>
