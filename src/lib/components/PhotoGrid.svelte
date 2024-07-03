<script lang="ts">
    import type {PhotoObject} from '$lib'
    let {displayedPhotos}:{displayedPhotos:PhotoObject[]}= $props()
    import Photo from "./Photo.svelte";
    import type { FileObject } from "$lib"
    
</script>
<div class="flex flex-wrap justify-center gap-4">
    {#each displayedPhotos as photo} 
    <Photo
    src={photo.url}
    alt={`Photo ${photo.photoName}`}
    width={200}
    height={200}
    photoName={photo.photoName}
    isAFavorite={photo.isAFavorite}
/>
    {/each}
        
</div>