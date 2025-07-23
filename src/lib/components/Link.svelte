<script lang="ts">
    import Icon from '$lib/components/Icon.svelte';
    
    // PROPS
    let { 
        href = "link-to", 
        label = "Link Label", 
        iconName = null,
        classname = "font-medium",
        iconSize = 16
    } = $props();
</script>

<a {href} class="inline-flex items-center justify-center relative {iconName ? 'secondary-fg hover:text-primary-fg transition-colors duration-300 ease-in-out' : 'link-text secondary-fg'} {classname}">
    {#if iconName}
        <Icon name={iconName} class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
    {:else}
        {label}
    {/if}
</a>