<script lang="ts">
  export let onSubmit: (event: Event, plan: { name: string; price: string }, isYearly: boolean) => void;
  export let onGoBack: () => void;
  let selectedPlan: string = 'Arcade'; 
  let isYearly: boolean = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    const plan = {
      name: selectedPlan,
      price: isYearly ? getYearlyPrice(selectedPlan) : getMonthlyPrice(selectedPlan)
    };
    onSubmit(event, plan, isYearly);
    console.log(plan);
  }

  function handleGoBack() {
    onGoBack();
  }
  function selectPlan(plan: string) {
    selectedPlan = plan;
  }
  function toggleBillingCycle() {
    isYearly = !isYearly;
  }
  function getYearlyPrice(plan: string): string {
    switch (plan) {
      case 'Arcade': return '$90/yr';
      case 'Advanced': return '$120/yr';
      case 'Pro': return '$150/yr';
      default: return '';
    }
  }

  function getMonthlyPrice(plan: string): string {
    switch (plan) {
      case 'Arcade': return '$9/mo';
      case 'Advanced': return '$12/mo';
      case 'Pro': return '$15/mo';
      default: return '';
    }
  }
</script>


<!--
<script lang="ts">
  export let onSubmit: (event: Event, plan: { name: string; price: string }, isYearly: boolean) => void;
  export let onGoBack: () => void;
  let selectedPlan: string = 'Arcade';
  let isYearly: boolean = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    const plan = {
      name: selectedPlan,
      price: isYearly ? getYearlyPrice(selectedPlan) : getMonthlyPrice(selectedPlan)
    };
    onSubmit(event, plan, isYearly);
  }

  function handleGoBack() {
    onGoBack();
  }

  function selectPlan(plan: string) {
    selectedPlan = plan;
  }

  function toggleBillingCycle() {
    isYearly = !isYearly;
  }

  function getYearlyPrice(plan: string): string {
    switch (plan) {
      case 'Arcade': return '$90/yr';
      case 'Advanced': return '$120/yr';
      case 'Pro': return '$150/yr';
      default: return '';
    }
  }

  function getMonthlyPrice(plan: string): string {
    switch (plan) {
      case 'Arcade': return '$9/mo';
      case 'Advanced': return '$12/mo';
      case 'Pro': return '$15/mo';
      default: return '';
    }
  }
</script>

-->

<style>
    .form-container{
        margin-left: 30px;
        width: 55%;
    }
    .header .title {
    color: var(--Marine-blue);
    }
    .header .exp {
    color: var(--Cool-gray);
    }

    form {
    margin-top: 50px;

    }
   
    .plan-card {
    border: 2px solid var(--Light-gray);
    border-radius: 7px;
    width: 130px;
    height: 150px;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    }
    .plan-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    }
    .plan-info b {
    color: var(--Marine-blue);
    }
    .plan-info span {
    color: var(--Cool-gray);
    }
    .selected {
    border: 2px solid var(--Purplish-blue);
    background-color: var(--Magnolia);
}

    .monthly,
    .yearly {
    color: var(--Cool-gray);
    font-weight: bold;
    }

    .switcher {
    background-color: var(--Magnolia);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 5rem;
    justify-content: center;
    margin-top: 2rem;
    }
    .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    }

    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    .sw-active {
    color: var(--Marine-blue);
    font-weight: 500;  
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--Marine-blue);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }

    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }

    .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .prev-stp {
    margin-top: auto;
    margin-bottom: 2rem;
    border: none;
    font-weight: 700;
    background-color: transparent;
    padding: 1rem 2rem;
    border-radius: 7px;
    color: var(--Cool-gray);
    cursor: pointer;
    }
    .next-stp {
    margin-top: auto;
    margin-bottom: 2rem;
    margin-left: auto;
    border: none;
    padding: 1rem 2rem;
    border-radius: 7px;
    background-color: var(--Marine-blue);
    color: white;
    cursor: pointer;
    }
    .card-container{
      display: flex;
      justify-content: space-between;
     
    }
    .prev-stp:hover{
      color: var(--Marine-blue);
    }
</style>
<div class="form-container">
    <div class="header">
        <h1 class="title">Select your plan</h1>
        <p class="exp">You have the option of monthly or yearly billing.</p>
    </div>
    <form on:submit={handleSubmit}>
      <div class="card-container">
        <button type="button" class="plan-card {selectedPlan === 'Arcade' ? 'selected' : ''}" on:click={() => selectPlan('Arcade')}>
        <img src="/icon-arcade.svg" alt="arcade" />
        <div class="plan-info">
          <b>Arcade</b>
          <span class="plan-priced">{isYearly ? '$90/yr' : '$9/mo'}</span>
          {#if isYearly}
            <span class="plan-free">2 months free</span>
          {/if}
        </div>
        </button>
        <button type="button" class="plan-card {selectedPlan === 'Advanced' ? 'selected' : ''}" on:click={() => selectPlan('Advanced')}>
        <img src="/icon-advanced.svg" alt="advanced" />
        <div class="plan-info">
          <b>Advanced</b>
          <span class="plan-priced">{isYearly ? '$120/yr' : '$12/mo'}</span>
          {#if isYearly}
            <span class="plan-free">2 months free</span>
          {/if}
        </div>
        </button>
        <button type="button" class="plan-card {selectedPlan === 'Pro' ? 'selected' : ''}" on:click={() => selectPlan('Pro')}>
        <img src="/icon-pro.svg" alt="pro" />
        <div class="plan-info">
          <b>Pro</b>
          <span class="plan-priced">{isYearly ? '$150/yr' : '$15/mo'}</span>
          {#if isYearly}
            <span class="plan-free">2 months free</span>
          {/if}
        </div>
        </button>
    </div>
    <div class="switcher">
      <p class="monthly {isYearly ? '' : 'sw-active'}">Monthly</p>
      <label class="switch">
        <input type="checkbox" on:change={toggleBillingCycle} />
        <span class="slider round"></span>
      </label>
      <p class="yearly {isYearly ? 'sw-active' : ''}">Yearly</p>
    </div>
    <div class="btns">
            <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
            <button class="next-stp" type="submit">Next Step</button>
    </div>
    </form>

</div>







