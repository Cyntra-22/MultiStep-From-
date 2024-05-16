<script>

</script>
<style>
    .form-container{
        margin-left: 30px;
    }
    .header .title {
    color: var(--Marine-blue);
    }
    .header .exp {
    color: var(--Cool-gray);
    }

    form {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2rem;
    margin-top: 50px;
    }
    .plan-card {
    border: 2px solid var(--Light-gray);
    border-radius: 7px;
    width: 110px;
    height: 140px;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

    .sw-active {
    color: var(--Marine-blue);
    font-weight: 500;  
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
</style>
<div class="form-container">
    <div class="header">
        <h1 class="title">Select your plan</h1>
        <p class="exp">You have the option of monthly or yearly billing.</p>
    </div>
    <form>
        <div class="plan-card selected">
              <img src="/icon-arcade.svg" alt="arcade" />
            <div class="plan-info chosen">
                <b>Arcade</b>
                <span class="plan-priced">$9/mo</span>
            </div>
        </div>
        <div class="plan-card">
              <img src="/icon-advanced.svg" alt="arcade" />
            <div class="plan-info">
                <b>Advanced</b>
                <span class="plan-priced">$12/mo</span>
            </div>
        </div>
        <div class="plan-card">
              <img src="/icon-pro.svg" alt="arcade" />
            <div class="plan-info">
                <b>Pro</b>
                <span class="plan-priced">$15/mo</span>
            </div>
        </div>
        
    </form>
    <div class="switcher">
            <p class="monthly sw-active">Monthly</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p class="yearly">Yearly</p>
    </div>
    <div class="btns">
            <button class="prev-stp" type="button">Go Back</button>
            <button class="next-stp" type="submit">Next Step</button>
    </div>

</div>