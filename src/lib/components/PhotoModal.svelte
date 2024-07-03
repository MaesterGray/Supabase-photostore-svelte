<script lang="ts">
    let {src,alt,onClose}:{src:string,alt:string,onClose:()=>void} = $props()
</script>

<div class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div class="bg-gray-800 p-4 rounded-lg relative border border-gray-600">
    <button onclick={onClose} class="text-gray-300 hover:text-white mb-2">Close</button>
    <div class="relative w-[80vw] h-[80vh]">
        <img
            src={src} 
            alt={alt}
            class="rounded-lg object-cover object-center w-full h-full" 
        />
    </div>
    </div>
</div>