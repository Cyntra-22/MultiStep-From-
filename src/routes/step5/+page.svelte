<script lang="ts">
  import Step1 from '$lib/step1.svelte';
  import { goto } from '$app/navigation';

  function handleNextStep(event: Event) {
    event.preventDefault();
    goto('/step2');
  }
</script>

<Step1 onSubmit={handleNextStep} />
