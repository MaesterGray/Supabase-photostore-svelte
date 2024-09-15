<script lang='ts'>
    let {handleSignOut,signingOut}:{handleSignOut:()=>void,signingOut:boolean} = $props()

</script>
<div >
    <button 
    class="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
    onclick={()=>{console.log('I ran');handleSignOut()}} >
      {#if signingOut}
        signing out ....
        {:else}
        Sign Out
      {/if} 
    </button>
</div>
    