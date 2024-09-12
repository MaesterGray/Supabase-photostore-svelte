<script lang="ts">
	import type { PageData } from './$types';
	import Nav from '$lib/components/Nav.svelte';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import SignOutButton from '$lib/components/SignOutButton.svelte';
	 let {data} =  $props();
</script>


<main class="min-h-screen bg-gray-800 text-white relative p-10">
	<Nav />
		<div class=" mx-auto px-4 py-4">
			<div class="flex flex-col items-center mb-6">
			<h1 class="text-4xl font-bold mb-4">Favorites</h1>
			</div>
					<PhotoGrid displayedPhotos={data.favorites} forFavorite={true} favorites={data.favorites} />
		</div>
		<div class="absolute top-4 right-4">
			<SignOutButton route={'?/private/signOut'}/>
		</div>
</main>