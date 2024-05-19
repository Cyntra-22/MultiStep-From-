<script lang="ts">
  import Step2 from "$lib/Step2.svelte"; 
  import { goto } from '$app/navigation';
  import {currentStep} from "$lib/stepStore";

  currentStep.set(2);

  function handleNextStep(event: Event) {
    event.preventDefault();
    goto('/step3');
  }

  function handleGoBack() {
    console.log('Go Back clicked');
    goto('/step1');
  }
</script>

<Step2 onSubmit={handleNextStep} onGoBack={handleGoBack} />
