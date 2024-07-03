// import type { PageServerLoad } from './$types';
// import type {  SupabaseClient, User } from '@supabase/supabase-js'
// import type {FileObject,PhotoObject} from '$lib'
// import { extractFilePath } from '$lib';
// import { redirect } from '@sveltejs/kit';
// async function fetchUserPhotos(user:User,supabase:SupabaseClient){
//     if (!user) return;

//     const folderPath = `user_uploads/${user.id}/`
//     const {data,error} = await supabase.storage
//         .from('photos')
//         .list(folderPath)

//     if (error){
//         console.error('Error fetching photos', error)
//         return
//     }
//     console.log(data)
//     return data;
// }

// async function getPhotoUrls(photoss:FileObject[], user:User, supabase:SupabaseClient){
    
//     return Promise.all(photoss.map(async (photo) => {
//         const {data, error} = await supabase.storage
//             .from('photos')
//             .createSignedUrl(`user_uploads/${user.id}/${photo.name}`, 60 * 60)
//         if (error){
//             console.log('Error generating signed url', error)
//             return null
//         }
//         return {url: data.signedUrl, photoName: photo.name}
//     }))
// }

// export const load = (async ({depends,locals:{supabase,user}}) => {
//     //console.log(user?.id,supabase)
//     if(user){
//         let photo = await fetchUserPhotos(user,supabase) as FileObject[]
//         console.log(photo)
//         let photoObjects;
//         try{
            
//             photoObjects = await getPhotoUrls(photo,user,supabase)
//             console.log(photoObjects)
//             return { photos:photoObjects} as {photos:PhotoObject[]}
//         }catch(err){
//             console.error(err)
//             return err
//         }
//     }else{
//       return redirect(303,'/')  
//     }

// }) satisfies PageServerLoad;

// export const actions={
//     signOut:async({locals:{session,supabase}})=>{
//         if (session) {
//             await supabase.auth.signOut()
//         }
//     },
//     deletePhoto:async({locals:{user,supabase},request})=>{
//         const formdata = await request.formData();
//         const src = formdata.get('photoPath') as string
//         console.log(src)
//         const filePath = extractFilePath(src)
//         console.log(filePath)

//         const {error} = await supabase.storage.from('photos').remove([filePath])
//         console.log({error})
//         if (error){
//             return {success: false, error}
//         }
//     }
// }