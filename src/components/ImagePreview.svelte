<script lang="ts">
  import type { Image } from "$lib/types";
  import Button from "$lib/components/ui/button/button.svelte";
  import DeleteIcon from "../components/icons/DeleteIcon.svelte";
  import { createEventDispatcher } from "svelte";

  export let image: Image;
  const dispatcher = createEventDispatcher();
</script>

<div class="relative">
  <img
    src={image.preview}
    alt={image.alt}
    class="w-full h-40 object-cover rounded"
  />
  <Button
    type="button"
    on:click={() => {
      dispatcher("deleteImage");
    }}
    variant="destructive"
    size="icon"
    class="absolute top-2 right-2 h-6 w-6"
  >
    <DeleteIcon className="h-4 w-4" />
    <span class="sr-only">Eliminar imagen</span>
  </Button>
</div>
