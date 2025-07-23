<script lang="ts">
    import Icon from '$lib/components/Icons/Icon.svelte';
    
    interface LinkProps {
        href?: string;
        label?: string;
        iconName?: string | null;
        classname?: string;
    }
    
    let { 
        href = "link-to", 
        label = "Link Label", 
        iconName = null,
        classname = "font-normal",
    }: LinkProps = $props();
</script>

<a {href} class="inline-flex items-center justify-center relative {iconName ? '' : 'link-text secondary-fg'} {classname}">
    {#if iconName}
        <Icon name={iconName} class="w-4 h-4"/>
    {:else}
        {label}
    {/if}
</a>