<script lang="ts">
    interface IconProps {
        color?: string;
        size?: number;
        strokeWidth?: number;
        isHovered?: boolean;
        class?: string;
    }

    let {
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        isHovered = false,
        class: className = ''
    }: IconProps = $props();

    function handleMouseEnter() {
        isHovered = true;

        setTimeout(() => {
            isHovered = false;
        }, 1200);
    }
</script>

<div class={className} aria-label="moon" role="img" onmouseenter={handleMouseEnter}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
        class="moon-icon"
        class:animate={isHovered}
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
</div>

<style>
    div {
        display: inline-block;
    }
    
    .moon-icon {
        overflow: visible;
        transform-origin: center;
        transition: transform 0.3s ease;
    }

    .moon-icon.animate {
        animation: moonRotation 1.2s ease-in-out;
    }

    @keyframes moonRotation {
        0% {
            transform: rotate(0deg);
        }
        16.67% {
            transform: rotate(-10deg);
        }
        33.33% {
            transform: rotate(10deg);
        }
        50% {
            transform: rotate(-5deg);
        }
        66.67% {
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
