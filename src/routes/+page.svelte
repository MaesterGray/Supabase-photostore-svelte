<script>
    import AuthForm from '$lib/components/AuthForm.svelte'
</script>
<main class="flex items-center justify-center bg-gray-900 min-h-screen">
    <div class="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h2 class="text-white text-2xl font-bold mb-4 text-center">Welcome to Photo Store</h2>
      <p class="mb-6 text-lg text-center">
        Sign in to upload and save your favorite photos.
      </p>
    <AuthForm signInAction='?/signin' signUpAction='?/signup'/>
    </div>
  </main>
