<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-w-[320px] align-middle antialiased primary-bg">
	{@render children()}
</div>
