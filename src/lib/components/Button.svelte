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
        default: "button-default",
        outlined: "button-outlined primary-fg",
    };

    const finalClass = `${baseStyle} ${variantMap[variant]}`;
</script>

{#if href}
    <a href={href} class={finalClass}>
        <span class={variant === "default" ? "shimmer-text" : ""} data-text={label}>
            {label}
        </span>
    </a>
{:else}
    <button class={finalClass} onclick={onClick}>
        <span class={variant === "default" ? "shimmer-text" : ""} data-text={label}>
            {label}
        </span>
    </button>
{/if}