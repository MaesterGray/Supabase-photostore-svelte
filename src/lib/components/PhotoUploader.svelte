<script lang='ts'>
let {uploading,handleUpload}:{uploading:boolean,handleUpload:(event:Event)=>void} = $props()
</script>

<label
         for="photo-upload"
         class="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg m-4"
         >
            {#if uploading }
            Uploading...
            {:else}
            Upload Photo
            {/if }  
            <input 
            type="file" 
            id="photo-upload" 
            onchange={handleUpload}
            disabled={uploading}
            class="hidden"
            />
         </label>