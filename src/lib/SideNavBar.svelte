<script lang="ts">
  import { currentStep } from '$lib/stepStore';
  import { onMount } from 'svelte';

  let step: number;

  onMount(() => {
    currentStep.subscribe(value => {
      step = value;
    });
  });
</script>

<style>
    .form-sidebar {
    background-image: url("/bg-sidebar-desktop.svg");
    background-repeat: no-repeat;
    width: 250px;
    height: 470px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    }

    .circle {
    width: 40px;
    height: 40px;
    border: 2px solid var(--White);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--White);
    font-weight: 700;
    }

    .active .circle {
    background-color: var(--Light-blue) !important;
    color: var(--Marine-blue) !important;
    }

    .step {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    }

    .step-content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    }

    .step-content span {
    text-transform: uppercase;
    color: var(--Light-gray);
    font-size: 13px;
    }

    .step-content b {
    text-transform: uppercase;
    color: var(--White);
    }
</style>

<div class="form-sidebar">
  <div class="step {step === 1 ? 'active' : ''}">
    <div class="circle">1</div>
    <div class="step-content">
      <span>Step 1</span>
      <b>Your info</b>
    </div>
  </div>
  <div class="step {step === 2 ? 'active' : ''}">
    <div class="circle">2</div>
    <div class="step-content">
      <span>Step 2</span>
      <b>Select plan</b>
    </div>
  </div>
  <div class="step {step === 3 ? 'active' : ''}">
    <div class="circle">3</div>
    <div class="step-content">
      <span>Step 3</span>
      <b>Add-ons</b>
    </div>
  </div>
  <div class="step {step === 4 ? 'active' : ''}">
    <div class="circle">4</div>
    <div class="step-content">
      <span>Step 4</span>
      <b>Summary</b>
    </div>
  </div>
</div>
