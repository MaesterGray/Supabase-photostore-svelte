<script lang='ts'>
    import AuthForm from '$lib/components/AuthForm.svelte'
    let isNewUser = $state(true)
  
    function stateChanger(option:string){
      if(option==='true'){
        isNewUser= true
      }else if(option==='invert'){
        isNewUser=!isNewUser
}  else{
        isNewUser = false
      }
    }
</script>
<main class="flex items-center justify-center bg-gray-900 min-h-screen">
    <div class="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h2 class="text-white text-2xl font-bold mb-4 text-center">Welcome to Photo Store</h2>
      <p class="mb-6 text-lg text-center">
        {#if isNewUser}
          Create An Account to upload and save your favorite videos.
          {:else}
          Sign in to upload and save your favorite photos.
        {/if}
      </p>
    <AuthForm signInAction='?/signin' signUpAction='?/signup' isNewUser={true} stateChanger={stateChanger}/>
    </div>
  </main>
