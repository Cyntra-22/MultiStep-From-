<script lang="ts">
  import {addOnsStore} from "./addOnStore";
  import { planStore } from './planStore';
  import { get } from 'svelte/store';

  let plan = get(planStore);
  let selectedAddOns: AddOn[] = get(addOnsStore);

  export let onSubmit: (event: Event) => void;
  export let onGoBack: () => void;


  function handleSubmit(event: Event) {
    event.preventDefault();
    onSubmit(event);
  }

  function handleGoBack() {
    onGoBack();
  }

  function getTotalPrice(): string {
    let basePrice = plan.isYearly ? parseInt(plan.price.slice(1, -3)) : parseInt(plan.price.slice(1, -3));
    let addOnsPrice = selectedAddOns.reduce((total, addOn) => {
      return total + parseInt(addOn.price.slice(1, -3));
    }, 0);
    return `$${basePrice + addOnsPrice}${plan.isYearly ? '/yr' : '/mo'}`;
  }

  function togglePlanType() {
    planStore.update(currentPlan => {
      currentPlan.isYearly = !currentPlan.isYearly;
      currentPlan.price = currentPlan.isYearly ? 
                          `$${parseInt(currentPlan.price.slice(1, -3)) * 10}/yr` : 
                          `$${parseInt(currentPlan.price.slice(1, -3)) / 10}/mo`;
      return currentPlan;
    });

    addOnsStore.update(currentAddOns => {
      return currentAddOns.map(addOn => {
        addOn.price = plan.isYearly ? 
                      `$${parseInt(addOn.price.slice(1, -3)) * 10}/yr` : 
                      `$${parseInt(addOn.price.slice(1, -3)) / 10}/mo`;
        return addOn;
      });
    });

    plan = get(planStore);
    selectedAddOns = get(addOnsStore);
  }

</script>

<style>
    .header{
        margin-bottom: 40px;
    }
    .header .title {
    color: var(--Marine-blue);
    }

    .header .exp {
    color: var(--Cool-gray);
    }
    .step4-container{
        margin-left: 30px;
    }
     .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
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
    a{
    color: var(--Cool-gray);
    }
    .selection-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 500px;
    }
    .selection-container {
    background-color: var(--Magnolia);
    padding: 1.5rem;
   
    }

    .selected-plan {
    display: flex;
    justify-content: space-between;
    color: var(--Marine-blue);
    font-weight: 700;
    }
    
    .selected-addon {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    color: var(--Cool-gray);
    font-weight: 500;
    font-size: 0.9rem;
    }
    .total {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--Cool-gray);
    }
    .total b {
    color: var(--Purplish-blue);
    font-size: 1.2rem;
    }
    .plan-price{
        font-weight: 800;
    }
   
    .prev-stp:hover{
      color: var(--Marine-blue);
    }
    .change-style:hover{
      color: var(--Marine-blue);
    }
    .change-style{
      background: transparent;
      border: none;
      text-decoration: underline;
      cursor: pointer;
      color: var(--Cool-gray);
    }
    .change-style:hover{
      color: var(--Marine-blue);
    }
</style>


<div class="step4-container">
  <div class="header">
    <h1 class="title">Finishing up</h1>
    <p class="exp">Double-check everything looks OK before confirming.</p>
  </div>
  <form on:submit={handleSubmit}>
    <div class="selection-box">
      <div class="selection-container">
        <div class="selected-plan">
          <p class="plan-name">{plan.name} ({plan.isYearly ? 'Yearly' : 'Monthly'})</p>
          <p class="plan-price">{plan.price}</p>
        </div>
        <a role="button" class="change-style" on:click={togglePlanType}><small>Change</small></a>
        <hr />
        <div class="addons">
          {#each selectedAddOns as addOn}
            <div class="selected-addon">
              <span class="service-name">{addOn.name}</span>
              <span class="service-price">{addOn.price}</span>
            </div>
          {/each}
        </div> 
      </div> 
      <p class="total">Total ({plan.isYearly ? 'per year' : 'per month'}) <b>{getTotalPrice()}</b></p>
    </div>
    <div class="btns">
      <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
      <button class="next-stp" type="submit">Next Step</button>
    </div>
  </form>
</div>

