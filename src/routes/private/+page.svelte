<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import PhotoUploader from "$lib/components/PhotoUploader.svelte";
    import PhotoGrid from "$lib/components/PhotoGrid.svelte";
    import SignOutButton from "$lib/components/SignOutButton.svelte";
    import { invalidate } from "$app/navigation";
    import type { User ,SupabaseClient} from "@supabase/supabase-js";
    import type {PhotoObject} from '$lib'
    let uploading = $state(false)
    let {layout} = $props()
    async function handleFileUpload(event:Event){
        try{
            uploading = true
            const target = event.target as HTMLInputElement
            const file = target?.files[0] as File 
            const fileExtension = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExtension}`
            console.log(fileName)
            const filePath = `user_uploads/${layout.user.id}/${fileName}`
            const {error} = await layout.supabase.storage.from('photos').upload(filePath,file)
            invalidate('photos')
            uploading = false
            if (error) {
                throw error
            }
        }catch(error){
            console.log(error)
            uploading=false
        }
    }

    function extractFilePath(url:string){
    const parts = url.split('/user_uploads/')
    if (parts.length < 2){
        console.error('Invalid URL format')
        return ''
    }
    let filePath = parts[1];
    if (filePath.includes('?')){
        filePath = filePath.split('?')[0]
    }
    return 'user_uploads/' + filePath
}

    
</script>

<main class="min-h-screen bg-gray-800 text-white relative p-10">
    <Nav />
        <div class="container mx-auto px-4 py-4">
            <div class="flex flex-col items-center mb-6">
            <h1 class="text-4xl font-bold mb-4">Photos</h1>
            <PhotoUploader handleUpload={handleFileUpload} uploading={uploading}/>
            </div>
        <PhotoGrid  displayedPhotos={layout.photos}/>
        </div>
        <div class="absolute top-4 right-4">
            <SignOutButton route='?/signOut' />
        </div>
</main>