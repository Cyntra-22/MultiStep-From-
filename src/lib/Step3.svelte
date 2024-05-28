<script lang="ts">
  import {addOnsStore} from "./addOnStore";
  import { planStore } from './planStore';
  import {get} from "svelte/store";
  export let onSubmit: (event: Event, addOns: AddOn[]) => void;
  export let onGoBack: () => void;

  let year_plan = get(planStore);
  let onlineService: boolean = false;
  let largerStorage: boolean = false;
  let customizableProfile: boolean = false;

  const addOnDetails:AddOn[] = [
      { name: 'Online Service', price: year_plan.isYearly ? '$10/yr' : '$1/mo', isChecked: onlineService },
      { name: 'Larger Storage', price: year_plan.isYearly ? '$20/yr' : '$2/mo', isChecked: largerStorage },
      { name: 'Customizable Profile', price: year_plan.isYearly ? '$20/yr' : '$2/mo', isChecked: customizableProfile },
    ];
    

  function handleSubmit(event: Event) {
    event.preventDefault();
    const selectedAddOns = addOnDetails.filter(addOn => addOn.isChecked);
    onSubmit(event, selectedAddOns);
    addOnsStore.set(selectedAddOns);
    console.log(year_plan.isYearly);
  }

  function handleGoBack() {
    onGoBack();
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

    .step3-container{
        margin-left: 30px;
        width: 55%;
    }

    .description{
        display: flex;
        flex-direction: column;
        padding-left: 20px;
    }
    form {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 1.5rem;
    
    }
    .box {
    border: 1px solid var(--Cool-gray);
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    }
    .price{
        margin-left: auto;
        color: var(--Purplish-blue);
    }
    form input {
    accent-color: var(--Purplish-blue);
    transform: scale(1.3);
    user-select: none;
    }
    .description label {
    color: var(--Marine-blue);
    font-weight: 700;
    user-select: none;
   
    }
    .description small {
    color: var(--Cool-gray);
    font-weight: 700;
    }
    .ad-selected {
    border: 1px solid var(--Purplish-blue);
    background-color: var(--Magnolia);
    }
    .prev-stp:hover{
      color: var(--Marine-blue);
    }

    @media (min-width: 300px) and (max-width: 768px ){
         .step3-container{
        width: 70%;
        background-color: white;
        padding: 5px 19px 19px 19px;
        border-radius: 10px;
        transform: translate(0,-30%);
      }
      .btns{
        margin-top: 20px;
      }
      
    }
    
      
</style>

<div class="step3-container">  
        <div class="header">
            <h1 class="title">Pick add-ons</h1>
            <p class="exp">Add-ons help enhance your gaming experience.</p>    
        </div>
        <form on:submit={handleSubmit}> 
        {#each addOnDetails as addOn (addOn.name)}
            <div class="box {addOn.isChecked ? 'ad-selected' : ''}">
                <input type="checkbox" bind:checked={addOn.isChecked} />
                <div class="description">
                    <label>{addOn.name}</label>
                    <small>Access to multiplayer games</small>
                </div>
                <p class="price">{addOn.price}</p>
            </div>
        {/each}
        <div class="btns">
            <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
            <button class="next-stp" type="submit">Next Step</button>
        </div>  
    </form>

</div>


