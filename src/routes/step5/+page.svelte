<script lang="ts">
  import Step5 from "$lib/Step5.svelte"; 
  import {currentStep} from "$lib/stepStore";

  currentStep.set(4);

</script>

<Step5/>