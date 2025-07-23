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

<a {href} class="inline-flex items-center justify-center link-text secondary-fg {classname}">
    {#if iconName}
        <Icon name={iconName} size={14} class="secondary-fg aspect-square sm:w-4 sm:h-4 w-3.5 h-3.5" />
    {:else}
        {label}
    {/if}
</a>