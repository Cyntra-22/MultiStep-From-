<script lang="ts">
  import Step4 from "$lib/Step4.svelte";
  import { goto } from '$app/navigation';

  function handleNextStep(event: Event) {
    event.preventDefault();
   
    goto('/step5');
  }

  function handleGoBack() {
   
    goto('/step3');
  }
</script>

<Step4 onSubmit={handleNextStep} onGoBack={handleGoBack} />
