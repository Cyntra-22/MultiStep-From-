<script lang="ts">
  import Step3 from "$lib/Step3.svelte";
  import { goto } from '$app/navigation';
  import {currentStep} from "$lib/stepStore";

  currentStep.set(3);
  function handleNextStep(event: Event) {
    event.preventDefault();
   
    goto('/step4');
  }

  function handleGoBack() {
   
    goto('/step2');
  }
</script>

<Step3 onSubmit={handleNextStep} onGoBack={handleGoBack} />
