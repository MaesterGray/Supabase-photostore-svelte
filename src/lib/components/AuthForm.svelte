<script lang="ts">
	import { Upload } from "lucide-svelte";

    let {signInAction,signUpAction,isNewUser,stateChanger}:{signInAction:string,signUpAction:string,isNewUser:boolean,stateChanger:(option:string)=>void} = $props()
    let isSigningIn = $state(false)
</script>





    <form action={isNewUser ? signUpAction : signInAction} class="space-y-8 " method="post">
        <input
            type="email"
            name='email'
            value={''}
            class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Email"
        />
        <input
            type="password"
            name='password'
            value={''}
            class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Password"
        />
        <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {#if isNewUser}
            Sign Up
            {:else if isSigningIn}
            Loading
            {:else}
            Sign in
            {/if}
        </button>
        <p class="text-center text-white">
            {#if isNewUser}
            Already have an account? 
            <button
            type="button"
            onclick={() => isNewUser=false}
            class="text-indigo-400 hover:text-indigo-600"
            >
            Sign In
            </button>
            {:else}
           <button onclick={()=>isNewUser=true}>Don't have an account? </button> 
            <button
            type="button"
            onclick={() => isNewUser=true}
            class="text-indigo-400 hover:text-indigo-600 "
            >
            Sign Up
            </button>
            {/if}
        </p>
      
    </form>