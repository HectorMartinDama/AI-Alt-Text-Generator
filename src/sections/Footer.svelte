<script lang="ts">
  import GeminiIcon from "../components/icons/GeminiIcon.svelte";
  import GithubIcon from "../components/icons/GithubIcon.svelte";
  import VercelIcon from "../components/icons/VercelIcon.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Button } from "$lib/components/ui/button";
  import { animate } from "motion";
  import { onMount } from "svelte";

  onMount(() => {
    animate(
      "#href-container",
      { y: [200, 0], opacity: [0, 1] },
      { duration: 0.3 }
    );
  });
</script>

<footer
  class="flex justify-center items-center text-[#50535c] border-t mt-6 border-[#e5e7eb] py-4"
>
  <div id="href-container">
    <a
      href="https://github.com/HectorMartinDama"
      target="_blank"
      class="mr-4 inline-flex items-center border hover:bg-zinc-100 py-1.5 px-2 text-xs rounded-[6px] bg-white text-black gap-2"
    >
      <GithubIcon className="w-5 h-5" />
      View Source Code
    </a>

    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <Button
          builders={[builder]}
          variant="outline"
          class=" mr-4 inline-flex items-center border hover:bg-zinc-100 h-[34px] text-xs rounded-[6px] bg-white text-black gap-2"
        >
          <a
            href="https://ai.google.dev/gemini-api/docs/models/gemini"
            target="_blank"
            class=" inline-flex items-center gap-2"
          >
            <GeminiIcon className="w-5 h-5" />
            Gemini AI
          </a>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>gemini-1.5-flash</p>
      </Tooltip.Content>
    </Tooltip.Root>

    <a
      href="https://vercel.com/home"
      target="_blank"
      class="inline-flex items-center border hover:bg-zinc-100 transition-colors duration-150 py-1.5 px-2 text-xs rounded-[6px] bg-white text-black gap-2"
    >
      <VercelIcon className="w-5 h-5" />
      Deploy with Vercel
    </a>
  </div>
</footer>
