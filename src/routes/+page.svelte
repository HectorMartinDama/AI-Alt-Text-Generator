<script lang="ts">
  import type { Image } from "$lib/types";
  import Button from "$lib/components/ui/button/button.svelte";
  import { useChat } from "@ai-sdk/svelte";
  import UploadIcon from "../components/icons/UploadIcon.svelte";
  import SparklesIcon from "../components/icons/SparklesIcon.svelte";
  import AssistantMessage from "../components/AssistantMessage.svelte";
  import ImagePreview from "../components/ImagePreview.svelte";
  import Loader from "../components/icons/Loader.svelte";
  import Alert from "../components/Alert.svelte";
  import SelectLanguage from "../components/SelectLanguage.svelte";

  const { handleSubmit, messages, isLoading } = useChat();

  let language = "English";
  let imageUrl = "";
  let image: Image | null;
  let maxSize = 1024 * 1024 * 10;
  let isDragging = false;
  let fileInput: HTMLInputElement;

  const handleDragEnter = () => {
    isDragging = true;
  };

  const handleDragLeave = () => {
    isDragging = false;
  };

  const handleDrop = (event: DragEvent) => {
    isDragging = false;
    const files: FileList | undefined = event.dataTransfer?.files;
    if (files) {
      const firstFile = files[0];
      const newImage: Image = {
        file: firstFile,
        preview: URL.createObjectURL(firstFile),
        alt: "",
      };
      image = newImage;
      convertToBase64(image.file);
      //checkFileSizeAndUpload(droppedFiles);
      // example add image to ai
    }
  };

  const handleFileChange = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const files: FileList | null = input?.files;
    if (files) {
      const firstFile = files[0];
      const newImage: Image = {
        file: firstFile,
        preview: URL.createObjectURL(firstFile),
        alt: "",
      };
      image = newImage; // cambiar por funcion setImages
      // example add image to ai
      convertToBase64(image.file);
    }
  };

  const convertToBase64 = (file: File): void => {
    const reader = new FileReader();
    reader.onloadend = () => {
      imageUrl = reader.result as string; // Almacenamos el resultado como base64
    };
    reader.readAsDataURL(file); // Leemos el archivo como una Data URL (que incluye el base64)
  };

  const deleteImage = () => {
    image = null;
  };

  const handleSelectLanguage = (event) => {
    language = event.detail.value;
  };

  const checkFileSizeAndUpload = (files: File[]) => {
    const allFilesValid = files.every((file) => {
      if (file.size > maxSize) {
        return true;
      }
      return false;
    });
    if (allFilesValid) {
      // TODO: Deberia de usar un Promise ALl
      convertToBase64(files[0]);
      // los subo a la ia
    }
  };
</script>

<main class="flex flex-col items-center justify-center max-w-3xl mx-auto">
  <Alert />

  <button
    type="submit"
    class="flex flex-col items-center justify-center mb-6 w-full rounded-lg h-52 bg-gray-50 hover:bg-gray-100 border-2 border-dashed"
    on:click={() => fileInput.click()}
    on:dragenter|preventDefault={handleDragEnter}
    on:dragleave|preventDefault={handleDragLeave}
    on:drop|preventDefault={handleDrop}
    on:dragover|preventDefault
  >
    {#if isDragging}
      <p class="mb-2 text-sm text-gray-500">Suelta las imagenes aqui</p>
    {:else if image}
      <ImagePreview {image} on:deleteImage={deleteImage} />
    {:else}
      <UploadIcon className="w-10 h-10 mb-3 text-gray-400" />
      <p class="mb-2 text-sm text-gray-500">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
    {/if}

    <input
      type="file"
      accept=".png, .jpg, .webp, .jpge"
      on:change={handleFileChange}
      hidden
      bind:this={fileInput}
    />
  </button>

  <div class="flex items-center justify-center w-full gap-6 mb-5">
    <SelectLanguage on:changeLanguage={handleSelectLanguage} />
    <form
      class="flex items-center justify-center"
      on:submit={(e) => {
        handleSubmit(e, {
          allowEmptySubmit: true,
          data: {
            language: language,
            imageUrl: imageUrl,
          },
        });
      }}
    >
      <Button
        disabled={!image || $isLoading}
        type="submit"
        class="gap-2 min-w-[180px]"
      >
        {#if $isLoading}
          <Loader className="w-4 h-4" />
          Generate Alts...
        {:else}
          <SparklesIcon className="w-4 h-4" />
          Generate Alts
        {/if}
      </Button>
    </form>
  </div>

  <section class="overflow-y-scroll min-h-[180px] max-h-[180px]">
    <ul>
      {#each $messages as { role, content }}
        <li class="mb-5">
          {#if role === "assistant"}
            <AssistantMessage {content}>{content}</AssistantMessage>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  li {
    color: black;
  }
</style>
