<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	let {children,data} = $props()
	
		const {session,supabase} = data



	
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
	</script>

{@render children()}


