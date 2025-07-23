<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Check for saved theme preference or default to system preference
		const theme = localStorage.getItem('theme') || 'system';
		if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else if (theme === 'light') {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<div class="min-w-[320px] align-middle antialiased primary-bg">
	{@render children()}
</div>
