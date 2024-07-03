<script lang='ts'>
    let {route}:{route:string} = $props()
</script>

<form action={route} method="post">
    <button 
    type="submit"
    class="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
    >
        Sign Out
    </button>
</form>