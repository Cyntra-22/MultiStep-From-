<script lang="ts">
    import SideNavBar from "../lib/SideNavBar.svelte";
</script>
<style>
    :root{
        --Marine-blue: hsl(213, 96%, 18%);
        --Purplish-blue: hsl(243, 100%, 62%);
        --Pastel-blue: hsl(228, 100%, 84%);
        --Light-blue: hsl(206, 94%, 87%);
        --Strawberry-red: hsl(354, 84%, 57%);

        --Cool-gray: hsl(231, 11%, 63%);
        --Light-gray: hsl(229, 24%, 87%);
        --Magnolia: hsl(217, 100%, 97%);
        --Alabaster: hsl(231, 100%, 99%);
        --White: hsl(0, 0%, 100%);

        --font: "Ubuntu", sans-serif;
}
			
	:global(body){
		
        background-color: var(--Magnolia);
        font-family: var(--font);
       
} 

    .main-container{
        width: 60%;
        display: flex;
        background-color: var(--White);
        padding: 20px;
        position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
        border-radius: 10px;
    }
		 
</style>


<div class="main-container">
    <SideNavBar/>
    <slot/>
</div>


   