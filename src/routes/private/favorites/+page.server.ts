import type { PageServerLoad } from './$types';

// export const load = (async ({locals:{supabase,user}}) => {
//     const {data, error} = await supabase
//     .from('favorites')
//     .select('photo_name')
//     .eq('user_id', user?.id)

// if (error){
//     console.error(`Error fetching favorites`, error)
//     return []
// }
// return data.map((favorite) => favorite.photo_name)
// }) satisfies PageServerLoad;

export const actions ={
    addOrRemoveFromFavorites:async({locals:{supabase,user},request})=>{
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
            }else {
                const {error} = await supabase
                    .from('favorites')
                    .insert([{user_id: user?.id, photo_name: photoName}])
                
                if (error){
                        return {success: false, error}
                    }
                }
    }   
}
}