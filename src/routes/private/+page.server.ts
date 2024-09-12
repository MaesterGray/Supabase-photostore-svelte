import { extractFilePath } from '$lib';

export const actions={
    signOut:async({locals:{session,supabase}})=>{
        if (session) {
            await supabase.auth.signOut()
        }
    },
    deletePhoto:async({locals:{supabase,session},request})=>{
        const user = session?.user
        const formdata = await request.formData();
        const src = formdata.get('photoPath') as string
        const isAFavorite = formdata.get('isAFavorite') 
        const filePath = extractFilePath(src)
        const photoName = formdata.get('photo_name')

        const photoRemoval = await supabase.storage.from('photos').remove([filePath])
        let favoriteRemoval;
        if(isAFavorite==='true'){
             favoriteRemoval = await supabase.from('favorites').delete().match({user_id: user?.id, photo_name: photoName})
        }
        
        console.log({error:photoRemoval.error})
        if (photoRemoval.error||favoriteRemoval?.error){
            return {success: false, deletionErr:photoRemoval.error,delistinErr:favoriteRemoval?.error}
        }
    },
    addOrRemoveFromFavorites:async({locals:{supabase,session},request})=>{
        const user = session?.user
        const formdata = await request.formData()

        const isAFavorite = formdata.get('isAFavorite')
        const photoName = formdata.get('photoName')
        if (isAFavorite === 'true'){
            const {error} = await supabase
                .from('favorites')
                .delete()
                .match({user_id: user?.id, photo_name: photoName})
            if (error){
                return {success: false, error}
            }
    }  else {

            const {error} = await supabase
                .from('favorites')
                .insert([{user_id: user?.id, photo_name: photoName}])
            
            if (error){
                    return {success: false, error}
                }
            } 
}
}