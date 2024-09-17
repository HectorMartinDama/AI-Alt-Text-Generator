<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import CheckIcon from "./icons/CheckIcon.svelte";
  import CopyIcon from "./icons/CopyIcon.svelte";

  export let content: string;
  let isCopied = false;
  let isAnimating = false;

  const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        isCopied = true;
        isAnimating = true;
        setTimeout(() => {
          isCopied = false;
          isAnimating = false;
        }, 1500);
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
</script>

<Button
  class="flex justify-end shrink-0 relative overflow-hidden transition-all duration-300 ease-in-out {isAnimating
    ? 'animate-pulse'
    : ''}"
  on:click={() => {
    handleCopy(content);
  }}
  disabled={isCopied}
  variant={isCopied ? "ghost" : "outline"}
  size="sm"
>
  {#if isCopied}
    <CheckIcon className="w-5 h-5 stroke-green-600" />
  {:else}
    <CopyIcon className="w-4 h-4" />
  {/if}
</Button>
