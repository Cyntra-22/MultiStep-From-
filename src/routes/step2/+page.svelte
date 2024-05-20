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




<!-- App.svelte 
<script lang="ts">
  import Step2 from '$lib/Step2.svelte';
  import Step3 from '$lib/Step3.svelte';
  import Step4 from '$lib/Step4.svelte';
  import { goto } from '$app/navigation';
  
  let currentStep = 2;
  let selectedPlan = { name: 'Arcade', price: '$9/mo' };
  let isYearly = false;
  let addOns = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  };

  function handleSubmit(event: Event, plan: { name: string; price: string }, yearly: boolean) {
    selectedPlan = plan;
    isYearly = yearly;
    currentStep = 3;
  }

  function handleAddOnsSubmit(event: Event, addOnsData: any) {
    addOns = addOnsData;
    currentStep = 4;
  }

  function handleFinalSubmit(event: Event) {
    event.preventDefault();
    goto('/step5');
  }

  function goBack() {
    currentStep = currentStep === 4 ? 3 : 2;
  }
</script>

{#if currentStep === 2}
  <Step2 onSubmit={handleSubmit} onGoBack={goBack} />
{/if}
{#if currentStep === 3}
  <Step3 onSubmit={handleAddOnsSubmit} onGoBack={goBack} />
{/if}
{#if currentStep === 4}
  <Step4 plan={selectedPlan} isYearly={isYearly} addOns={addOns} onSubmit={handleFinalSubmit} onGoBack={goBack} />
{/if}

-->


