<script lang="ts">
    import type {PhotoObject} from '$lib'
    import { onMount } from 'svelte';
    let {displayedPhotos,favorites,forFavorite = false}:{displayedPhotos:PhotoObject[],favorites:PhotoObject[],forFavorite:Boolean}= $props()
    import Photo from "./Photo.svelte";
    import type { FileObject } from "$lib"
    let favoriteUrls:PhotoObject[] = []
    
    // if (forFavorite){
    //     for (let i = 0; i < displayedPhotos.length; i++) {
    //     for (let j = 0; j < favorites.length; j++) {
    //         if(displayedPhotos[i].photoName===favorites[j].photo_name){
    //             favoriteUrls.push(displayedPhotos[i])
    //             j=favorites.length
    //         }
    //     }      
    // }
    // }
   
</script>
<div class="flex flex-wrap justify-center gap-4 ">
    {#each displayedPhotos as photo} 
    <Photo

    src={photo.url}
    alt={`Photo ${photo.photoName}`}
    width={200}
    height={200}
    photoName={photo.photoName}
    isAFavorite={forFavorite?true:favorites.some((obj)=>obj.photoName === photo.photoName)}
/>
    {/each}
   
</div>