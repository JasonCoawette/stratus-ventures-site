<script lang="ts">
    interface ButtonProps {
        label?: string;
        variant?: "default" | "outlined";
        href?: string | null;
        onClick?: (() => void) | null;
    }

    let { 
        label = "Button", 
        variant = "default", 
        href = null, 
        onClick = null 
    }: ButtonProps = $props();

    const baseStyle = "flex w-full sm:w-fit h-fit px-8 py-3 rounded-lg button-label items-center justify-center";
    
    const variantMap: Record<"default" | "outlined", string> = {
        default: "button-default hover:opacity-90",
        outlined: "button-outlined primary-fg",
    };

    const finalClass = `${baseStyle} ${variantMap[variant]}`;
</script>

{#if href}
    <a href={href} class={finalClass}>
        {label}
    </a>
{:else}
    <button class={finalClass} onclick={onClick}>
        {label}
    </button>
{/if}