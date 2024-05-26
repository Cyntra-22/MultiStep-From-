<!--<script lang="ts">
  export let addOns: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean };
  export let onSubmit: (event: Event) => void;
  export let onGoBack: () => void;

  export let plan: { name: string; price: string };
  export let isYearly: boolean;

  function handleSubmit(event: Event) {
    event.preventDefault();
    onSubmit(event);
  }

  function handleGoBack() {
    onGoBack();
  }

  function getTotalPrice(): string {
    let basePrice = isYearly ? parseInt(plan.price.slice(1, -3)) : parseInt(plan.price.slice(1, -3));
    let addOnsPrice = 0;
    if (addOns.onlineService) addOnsPrice += 1;
    if (addOns.largerStorage) addOnsPrice += 2;
    if (addOns.customizableProfile) addOnsPrice += 2;
    return `$${basePrice + addOnsPrice}${isYearly ? '/yr' : '/mo'}`;
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
    .selected-addon .servic-price {
    color: var(--Marine-blue);
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
    .servic-price{
        font-weight: bold;
    }
    .prev-stp:hover{
      color: var(--Marine-blue);
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
                <p class="plan-name">{plan.name} ({isYearly ? 'Yearly' : 'Monthly'})</p>
                <p class="plan-price">{plan.price}</p>
              </div>
              <a href="/"><small class="change-style">Change</small></a>
              <hr />
              <div class="addons">
                {#if addOns.onlineService}
                  <div class="selected-addon">
                    <span class="service-name">Online service</span>
                    <span class="service-price">+$1/{isYearly ? 'yr' : 'mo'}</span>
                  </div>
                {/if}
                {#if addOns.largerStorage}
                  <div class="selected-addon">
                    <span class="service-name">Larger storage</span>
                    <span class="service-price">+$2/{isYearly ? 'yr' : 'mo'}</span>
                  </div>
                {/if}
                {#if addOns.customizableProfile}
                  <div class="selected-addon">
                    <span class="service-name">Customizable profile</span>
                    <span class="service-price">+$2/{isYearly ? 'yr' : 'mo'}</span>
                  </div>
                {/if}
              </div>
            </div>
            <p class="total">Total (per month) <b>{getTotalPrice()}</b></p>
      </div>
      <div class="btns">
            <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
            <button class="next-stp" type="submit">Next Step</button>
      </div>
    </form>
</div>
-->



<script lang="ts">

  import {planStore} from "./planStore";
  import {get} from "svelte/store";
  let plan = get(planStore);

  export let addOns: any;
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
    let addOnsPrice = 0;
    if (addOns.onlineService) addOnsPrice += 1;
    if (addOns.largerStorage) addOnsPrice += 2;
    if (addOns.customizableProfile) addOnsPrice += 2;
    return `$${basePrice + addOnsPrice}${plan.isYearly ? '/yr' : '/mo'}`;
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
    .selected-addon .servic-price {
    color: var(--Marine-blue);
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
    .servic-price{
        font-weight: bold;
    }
    .prev-stp:hover{
      color: var(--Marine-blue);
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
        <a href="/"><small class="change-style">Change</small></a>
        <hr />
        <div class="addons">
          {#if addOns.onlineService}
            <div class="selected-addon">
              <span class="service-name">Online service</span>
              <span class="service-price">+$1/{plan.isYearly ? 'yr' : 'mo'}</span>
            </div>
          {/if}
          {#if addOns.largerStorage}
            <div class="selected-addon">
              <span class="service-name">Larger storage</span>
              <span class="service-price">+$2/{plan.isYearly ? 'yr' : 'mo'}</span>
            </div>
          {/if}
          {#if addOns.customizableProfile}
            <div class="selected-addon">
              <span class="service-name">Customizable profile</span>
              <span class="service-price">+$2/{plan.isYearly ? 'yr' : 'mo'}</span>
            </div>
          {/if}
        </div>
      </div>
      <p class="total">Total (per month) <b>{getTotalPrice()}</b></p>
    </div>
    <div class="btns">
      <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
      <button class="next-stp" type="submit">Next Step</button>
    </div>
  </form>
</div>

<!--

<script lang="ts">
  export let plan: { name: string; price: string };
  export let isYearly: boolean;
  export let addOns: { onlineService: boolean; largerStorage: boolean; customizableProfile: boolean };
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
    let basePrice = isYearly ? parseInt(plan.price.slice(1, -3)) : parseInt(plan.price.slice(1, -3));
    let addOnsPrice = 0;
    if (addOns.onlineService) addOnsPrice += 1;
    if (addOns.largerStorage) addOnsPrice += 2;
    if (addOns.customizableProfile) addOnsPrice += 2;
    return `$${basePrice + addOnsPrice}${isYearly ? '/yr' : '/mo'}`;
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
    .selected-addon .servic-price {
    color: var(--Marine-blue);
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
    .servic-price{
        font-weight: bold;
    }
    .prev-stp:hover{
      color: var(--Marine-blue);
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
          <p class="plan-name">{plan.name} ({isYearly ? 'Yearly' : 'Monthly'})</p>
          <p class="plan-price">{plan.price}</p>
        </div>
        <a href="/"><small class="change-style">Change</small></a>
        <hr />
        <div class="addons">
          {#if addOns.onlineService}
            <div class="selected-addon">
              <span class="service-name">Online service</span>
              <span class="service-price">+$1/{isYearly ? 'yr' : 'mo'}</span>
            </div>
          {/if}
          {#if addOns.largerStorage}
            <div class="selected-addon">
              <span class="service-name">Larger storage</span>
              <span class="service-price">+$2/{isYearly ? 'yr' : 'mo'}</span>
            </div>
          {/if}
          {#if addOns.customizableProfile}
            <div class="selected-addon">
              <span class="service-name">Customizable profile</span>
              <span class="service-price">+$2/{isYearly ? 'yr' : 'mo'}</span>
            </div>
          {/if}
        </div>
      </div>
      <p class="total">Total (per month) <b>{getTotalPrice()}</b></p>
    </div>
    <div class="btns">
      <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
      <button class="next-stp" type="submit">Next Step</button>
    </div>
  </form>
</div>

-->