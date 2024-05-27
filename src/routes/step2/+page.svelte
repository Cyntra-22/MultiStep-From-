<script lang="ts">
  import Step2 from "$lib/Step2.svelte"; 
  import { goto } from '$app/navigation';
  import {currentStep} from "$lib/stepStore";

  currentStep.set(2);
  let selectedPlan = { name: 'Arcade', price: '$9/mo' };
  let isYearly = false;

  function handleNextStep(event: Event, plan: { name: string; price: string }, yearly: boolean) {
    event.preventDefault();
    selectedPlan = plan;
    isYearly = yearly;
    goto('/step3');
  }

  function handleGoBack() {
    console.log('Go Back clicked');
    goto('/step1');
  }
</script>

<Step2 onSubmit={handleNextStep} onGoBack={handleGoBack} />






