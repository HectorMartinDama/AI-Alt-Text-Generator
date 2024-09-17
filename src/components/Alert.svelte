<script lang="ts">
  import * as Alert from "$lib/components/ui/alert";
  import ExclamationIcon from "./icons/ExclamationIcon.svelte";
</script>

<Alert.Root class="mb-5">
  <ExclamationIcon className="w-4 h-4" />
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>
    This website uses <a
      href="https://vercel.com/blog/vercel-ai-sdk-3-3-3OnRtxG6a0rwvcJVu3qADv"
      class="underline">version 3.3 of the AI VERCEL SDK</a
    >, at this time only one file can be attached. As soon as possible I will
    add the new feature of being able to add more images. Thanks for the
    compression ✨.
  </Alert.Description>
</Alert.Root>
