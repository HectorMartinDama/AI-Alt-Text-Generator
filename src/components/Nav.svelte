<script>
  import BlogIcon from "./icons/BlogIcon.svelte";
  import FolderIcon from "./icons/FolderIcon.svelte";
  import LinkedinIcon from "./icons/LinkedinIcon.svelte";
</script>

<nav
  class="flex justify-between items-center h-[60px] border border-neutral-200 mb-10 px-32"
>
  <h1 class="text-[#27272A] text-2xl font-bold">AI Alt Text Generator</h1>
  <div class="flex items-center gap-6">
    <a
      href="https://blog-hectormartindama.vercel.app/en/"
      target="_blank"
      class="text-[#52525b] font-normal inline-flex items-center gap-2 text-base decoration-wavy underline-offset-4 hover:underline"
    >
      <BlogIcon className="w-5 h-5" />
      Blog
    </a>
    <a
      href="https://portfolio-hectormartindama.vercel.app"
      target="_blank"
      class="text-[#52525b] font-normal inline-flex items-center gap-2 text-base decoration-wavy underline-offset-4 hover:underline"
    >
      <FolderIcon className="w-5 h-5" />
      Projects
    </a>
    <a
      href="https://www.linkedin.com/in/h%C3%A9ctor-mart%C3%ADn-dama-a88a761a2/"
      target="_blank"
      class="text-[#52525b] font-normal inline-flex items-center gap-2 text-base decoration-wavy underline-offset-4 hover:underline"
    >
      <LinkedinIcon className="w-5 h-5" />
      Linkedin
    </a>
  </div>
</nav>
