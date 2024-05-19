<script lang="ts">
  import Step2 from "$lib/Step2.svelte"; 
  import { goto } from '$app/navigation';

  function handleNextStep(event: Event) {
    event.preventDefault();
   
    goto('/step3');
  }

  function handleGoBack() {
   
    goto('/step1');
  }
</script>

<Step2 onSubmit={handleNextStep} onGoBack={handleGoBack} />
