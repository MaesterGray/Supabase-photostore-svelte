<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import PhotoUploader from "$lib/components/PhotoUploader.svelte";
    import PhotoGrid from "$lib/components/PhotoGrid.svelte";
    import SignOutButton from "$lib/components/SignOutButton.svelte";
    import { invalidate } from "$app/navigation";
    let uploading = $state(false)
    
    let {data} = $props()
    async function handleFileUpload(event:Event){
        try{
            uploading = true
            const target = event.target as HTMLInputElement
            const file = target?.files[0] as File 
            const fileExtension = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExtension}`
            const filePath = `user_uploads/${data.user.id}/${fileName}`
            const {error} = await data.supabase.storage.from('photos').upload(filePath,file)
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
</script>

<main class="min-h-screen bg-gray-800 text-white relative p-10">
    <Nav />
        <div class="container mx-auto px-4 py-4">
            <div class="flex flex-col items-center mb-6">
            <h1 class="text-4xl font-bold mb-4">Photos</h1>
            <PhotoUploader handleUpload={handleFileUpload} uploading={uploading}/>
            </div>
        <PhotoGrid  displayedPhotos={data.photos} favorites={data.favorites} forFavorite={false}/>
        </div>
        <div class="absolute top-4 right-4">
            <SignOutButton route='?/signOut' />
        </div>
</main>