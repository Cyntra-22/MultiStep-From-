<script lang="ts">
  export let onSubmit: (event: Event) => void;

  function handleSubmit(event: Event) {
    event.preventDefault();
    onSubmit(event);
  }
</script>

<style>
    .form-container{
        margin-left: 30px;
        width: 55%;
    }
    .header{
        display: block;
    }
    form {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 1rem;
    }
    .label {
    color: var(--Marine-blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    form input {
    padding: 1rem;
    border: 1px solid var(--Cool-gray);
    border-radius: 7px;
    font-weight: 500;
    font-size: 1rem;
    }
    form input:focus {
    outline-color: var(--Purplish-blue);
    }
    form input::placeholder {
    font-weight: 500;
    font-size: 1rem;
    font-family: inherit;
    }
    form .error {
    display: none;
    color: var(--Strawberry-red);
    font-size: 0.9rem;
    font-weight: 700;
    }
    .header .title {
    color: var(--Marine-blue);
    }
    .header .exp {
    color: var(--Cool-gray);
    }
    label{
        font-weight: bold;
    }
    .next-stp {
    margin-top: 3rem;
    float:right;
    border: none;
    padding: 1rem 2rem;
    border-radius: 7px;
    background-color: var(--Marine-blue);
    color: white;
    cursor: pointer;
    font-weight: bold;
    }
</style>
<div class="form-container">
    <div class="header">
        <h1 class="title">Personal info</h1>
        <p class="exp">Please provide your name, email address, and phone number.</p>
    </div>
    <form on:submit={handleSubmit}>
        <div class="label">
            <label for="name">Name</label>
            <p class="error">This Field Is Required</p>
        </div>
        <input
              required
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
        />
        <div class="label">
              <label for="email">Email Address</label>
              <p class="error">This Field Is Required</p>
        </div>
        <input
              required
              type="text"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
        />
        <div class="label">
              <label for="phone">Phone Number</label>
              <p class="error">This Field Is Required</p>
        </div>
        <input
              required
              type="tel"
              id="phone"
              placeholder="e.g. +1 234 567 890"
            />
        
        <div class="btns">
            <button class="next-stp" type="submit">Next Step</button>
        </div>
    </form>
    
</div>
