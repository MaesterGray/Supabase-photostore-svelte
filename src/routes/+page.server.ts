import type { PageServerLoad,Actions } from './$types';
import { redirect } from '@sveltejs/kit'

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
	  const formData = await request.formData()
	  const email = formData.get('email') as string
	  const password = formData.get('password') as string
	  const { error } = await supabase.auth.signUp({ email, password })
	  if (error) {
		console.error(error)
		return redirect(303, '/error')
	  } else {
		return redirect(303, '/unverified-email')
	  }
	},
	signin: async ({ request, locals: { supabase } }) => {
	  const formData = await request.formData()
	  const email = formData.get('email') as string
	  const password = formData.get('password') as string
	  const { error } = await supabase.auth.signInWithPassword({ email, password })
	  if (error) {
		console.error(error)
		return redirect(303, '/error')
	  } else {
		return redirect(303, '/private')
	  }
	},
	
  }
  
