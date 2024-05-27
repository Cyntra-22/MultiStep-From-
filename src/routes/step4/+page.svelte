<script lang="ts">
  import Step4 from "$lib/Step4.svelte";
  import { goto } from '$app/navigation';
  import {currentStep} from "$lib/stepStore";

 
  currentStep.set(4);
  let selectedPlan = { name: 'Arcade', price: '$9/mo' };
  let isYearly = false;
  let addOns = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  };
  function handleNextStep(event: Event) {
    event.preventDefault();
   
    goto('/step5');
  }

  function handleGoBack() {
   
    goto('/step3');
  }
</script>

<Step4 onSubmit={handleNextStep} onGoBack={handleGoBack} />


