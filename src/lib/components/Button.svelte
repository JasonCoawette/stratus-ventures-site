<script lang="ts">
    // PROPS
    let { 
        label = "Button", 
        variant = "default", 
        href = null, 
        onClick = null 
    }: {
        label?: string;
        variant?: "default" | "outlined";
        href?: string | null;
        onClick?: (() => void) | null;
    } = $props();

    // BASE STYLE
    const baseStyle = "flex w-full sm:w-fit h-fit px-8 py-3 rounded-lg button-label items-center justify-center";
    
    // VARIANT STYLES
    const variantMap: Record<"default" | "outlined", string> = {
        default: "button-default",
        outlined: "button-outlined primary-fg",
    };

    const finalClass = `${baseStyle} ${variantMap[variant]}`;
</script>

{#if href}
    <!-- Render as <a> -->
    <a 
        href={href} 
        class={finalClass}>
        {label}
    </a>
{:else}
    <!-- Render as <button> -->
    <button 
        class={finalClass} 
        onclick={onClick}>
            {label}
    </button>
{/if}