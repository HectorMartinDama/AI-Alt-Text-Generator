<script lang="ts">
  import { type Snippet } from "svelte";
  import * as Card from "$lib/components/ui/card";
  import { render } from "svelte/server";
  import CopyButton from "./CopyButton.svelte";

  type Props = {
    children: Snippet;
    content: string;
  };

  let { children, content }: Props = $props();
</script>

<Card.Root class="py-2 w-full ">
  <div class="flex justify-end pr-6 pb-2">
    <CopyButton {content} />
  </div>
  <Card.Content>
    <div class="w-full flex justify-center items-center">
      <article class="prose max-w-full">
        {@render children()}
      </article>
    </div>
  </Card.Content>
</Card.Root>
