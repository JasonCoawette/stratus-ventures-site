<script lang="ts">
    import Send from './Send.svelte';
    import Sun from './Sun.svelte';
    import Moon from './Moon.svelte';
    
    interface IconProps {
        name: string;
        size?: number;
        class?: string;
    }
    
    let { 
        name = "icon",
        size = 16,
        class: className = ""
    }: IconProps = $props();
</script>

<div 
    class="flex items-center justify-center transition-opacity duration-300 ease-in-out {className}"
    style={className.includes('w-') ? '' : `width: ${size}px; height: ${size}px;`}
>
    {#if name === "mail"}
        <Send {size} class="w-full h-full" />
    {:else if name === "sun"}
        <Sun {size} class="w-full h-full" />
    {:else if name === "moon"}
        <Moon {size} class="w-full h-full" />
    {:else if name === "x.com"}
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1200 1227" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg" 
            class="x-icon" 
            stroke="currentColor" 
            stroke-width="2"
        >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
        </svg>
    {/if}
</div>

<style>
    div {
        color: rgb(var(--color-primary));
        fill: rgb(var(--color-primary));
        opacity: 0.4;
    }
    
    div:hover {
        opacity: 1;
    }
    
    .x-icon {
        transition: transform 0.3s ease;
    }
    
    div:hover .x-icon {
        transform: rotate(12deg) scale(0.8);
    }
</style>
