<script lang="ts">
  import * as Select from "$lib/components/ui/select/index.js";
  import { createEventDispatcher } from "svelte";

  const languages = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
  ];

  let selected = { value: "english", label: "English" };
  const dispatcher = createEventDispatcher();

  $: if (selected) dispatcher("changeLanguage", { value: selected.value });
</script>

<Select.Root portal={null} bind:selected>
  <Select.Trigger class="w-[180px]">
    <Select.Value placeholder="Select a language" />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      {#each languages as language}
        <Select.Item value={language.value} label={language.label}
          >{language.label}</Select.Item
        >
      {/each}
    </Select.Group>
  </Select.Content>
  <Select.Input name="favoriteFruit" />
</Select.Root>
