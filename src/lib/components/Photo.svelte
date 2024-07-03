<script lang="ts">
    import { Heart,Trash2 } from 'lucide-svelte';
    import PhotoModal from './PhotoModal.svelte';
    let {src, alt, width, height, photoName, isAFavorite }:{src:string,alt:string,width:number,height:number,photoName:string,isAFavorite:boolean}=$props()
    let showModal = $state(false)

    function toggleModal(){
        showModal=!showModal
    }
</script>

<div
style={`width:${width}, height:${height}`}
class="relative w-auto h-auto shadow-md border border-white border-opacity-80 rounded-lg overflow-hidden cursor-pointer"
>

    <form 
    action={'?/deletePhoto'}
    class="absolute bottom-2.5 right-10 z-10"
    method="post"
    >
        <input type="hidden" name="photoPath" value={src} />
        <button 
        type="submit"
        class="bg-transparent border-none text-white cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300"
        >
            <Trash2 />
        </button>
    </form>

    <form 
    action={''}
    class="absolute bottom-2.5 right-2.5 z-10"
    method="post"
    >
        <input type="hidden" name="photoName" value={photoName} />
        <input type="hidden" name="isAFavorite" value={isAFavorite} />
        <button 
        type="submit"
        class="bg-transparent border-none text-white cursor-pointer hover:text-green-500 hover:scale-110 transition duration-300"
        >
            {#if isAFavorite}
            <Heart  fill='red'/>
            {:else}
            <Heart />
            {/if}   
        </button>
    </form>

    <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={`objectFit: 'cover', objectPosition: 'center'`}
    onclick={() => showModal = true}
    />
</div>

   {#if showModal}
   <PhotoModal src={src} alt={alt} onClose={toggleModal} /> 
   {/if} 

