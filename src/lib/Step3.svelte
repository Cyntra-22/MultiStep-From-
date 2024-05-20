<script lang="ts">
  export let onSubmit: (event: Event) => void;
  export let onGoBack: () => void;

  let onlineService:boolean = false;
  let largerStorage:boolean = false;
  let customizableProfile:boolean = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    onSubmit(event);
  }

  function handleGoBack() {
    onGoBack();
  }
</script>

<!--
<script lang="ts">
  export let onSubmit: (event: Event, addOns: any) => void;
  export let onGoBack: () => void;

  let onlineService: boolean = false;
  let largerStorage: boolean = false;
  let customizableProfile: boolean = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    const addOns = {
      onlineService,
      largerStorage,
      customizableProfile
    };
    onSubmit(event, addOns);
  }

  function handleGoBack() {
    onGoBack();
  }
</script>
-->
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
</style>

<div class="step3-container">  
        <div class="header">
            <h1 class="title">Pick add-ons</h1>
            <p class="exp">Add-ons help enhance your gaming experience.</p>    
        </div>
        <form on:submit={handleSubmit}> 
            <div class="box {onlineService ? 'ad-selected' : ''}">
                <input type="checkbox" bind:checked={onlineService} />
                <div class="description">
                    <label for="online">Online Service</label>
                    <small>Access to multiplayer games</small>
                </div>
                <p class="price">+$1/mo</p>
            </div>
            <div class="box {largerStorage ? 'ad-selected' : ''}">
                <input type="checkbox" bind:checked={largerStorage} />
                <div class="description">
                    <label for="larger">Larger storage</label>
                    <small>Extra 1TB of cloud save</small>
                </div>
                <p class="price">+$2/mo</p>
            </div>
            <div class="box {customizableProfile ? 'ad-selected' : ''}">
                <input type="checkbox" bind:checked={customizableProfile} />
                <div class="description">
                    <label for="online">Customizable Profile</label>
                    <small>Custom theme on your profile</small>
                </div>
                <p class="price">+$2/mo</p>
            </div>
            <div class="btns">
                <button class="prev-stp" type="button" on:click={handleGoBack}>Go Back</button>
                <button class="next-stp" type="submit">Next Step</button>
            </div>  
        </form>

</div>