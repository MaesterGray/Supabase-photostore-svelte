import type {  SupabaseClient, User } from '@supabase/supabase-js'
import type {FileObject,PhotoObject} from '$lib'
async function fetchUserPhotos(user:User,supabase:SupabaseClient){
    if (!user) return;

    const folderPath = `user_uploads/${user.id}/`
    const {data,error} = await supabase.storage
        .from('photos')
        .list(folderPath)

    if (error){
        console.error('Error fetching photos', error)
        return
    }
    return data;
}

async function getPhotoUrls(photos:FileObject[], user:User, supabase:SupabaseClient){
    
    return Promise.all(photos.map(async (photo) => {
        const {data, error} = await supabase.storage
            .from('photos')
            .createSignedUrl(`user_uploads/${user.id}/${photo.name}`, 60 * 60)
        if (error){
            console.log('Error generating signed url', error)
            return null
        }
        return {url: data.signedUrl, photoName: photo.name}
    }))
}

export const load = (async ({depends,locals:{supabase,session}}) => {
        depends('photos')
        const user = session?.user as User
        let photo = await fetchUserPhotos(user,supabase) as FileObject[]
        let favs;
        let photoObjects;
        const {data, error} = await supabase
        .from('favorites')
        .select('photo_name')
        .eq('user_id', user?.id) 

        if(error){
            return error
        }
        
        try{
            
            photoObjects = await getPhotoUrls(photo,user,supabase)

             favs = photoObjects.filter(photo=> data.some(item => item.photo_name=== photo?.photoName))
           
        }catch(err){
            console.error(err)
            return err
        }
        return { photos:photoObjects,favorites:favs} as {photos:PhotoObject[],favorites:[]}

}) 

