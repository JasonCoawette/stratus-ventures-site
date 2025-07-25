<script lang="ts">
    import Icon from '$lib/components/icons/Icon.svelte';    
    import NumberTicker from './NumberTicker.svelte';
    import * as Tooltip from "$lib/components/tooltip";

    interface MetricProps {
        name: string;
        data: number;
    }

    let {
        name = "users",
        data = 0,
    }: MetricProps = $props();

    let isIconHovered = $state(false);
    let touchTimeout: number;

    function getDisplayName(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function handleTouchStart(event: TouchEvent) {
        event.preventDefault();
        isIconHovered = true;
        // Clear any existing timeout
        if (touchTimeout) {
            clearTimeout(touchTimeout);
        }
    }

    function handleTouchEnd(event: TouchEvent) {
        event.preventDefault();
        // Add a small delay before hiding to allow tooltip to show
        touchTimeout = setTimeout(() => {
            isIconHovered = false;
        }, 1000);
    }
</script>

<Tooltip.Provider>
    <Tooltip.Root delayDuration={0}>
        <div class="inline-flex items-center justify-start gap-2 min-w-16">
            <Tooltip.Trigger
                onmouseenter={() => isIconHovered = true}
                onmouseleave={() => isIconHovered = false}
                ontouchstart={handleTouchStart}
                ontouchend={handleTouchEnd}
            >
                <div 
                    class="w-4 h-4 flex items-center justify-center cursor-pointer"
                    role="button"
                    tabindex="0"
                >
                    <Icon name={name} class="w-4 h-4 {isIconHovered ? 'primary-fg' : 'secondary-fg'}"/>
                </div>
            </Tooltip.Trigger>
            <NumberTicker value={data} class="span-small {isIconHovered ? 'primary-fg' : 'secondary-fg'}"/>
        </div>
        <Tooltip.Content side="top" class="span-small button-default capitalize tooltip-responsive">
            {getDisplayName(name)}
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>