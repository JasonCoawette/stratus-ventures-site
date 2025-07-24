<script lang="ts">
    import Icon from '$lib/components/Icons/Icon.svelte';
    import NumberTicker from './NumberTicker.svelte';
    import * as Tooltip from "$lib/components/tooltip";
    import { Popover } from "bits-ui";
    import { onMount } from "svelte";

    interface MetricProps {
        name: string;
        data: number;
    }

    let {
        name = "users",
        data = 0,
    }: MetricProps = $props();

    // State to track if icon is being hovered or popover is open
    let isIconHovered = $state(false);
    let isPopoverOpen = $state(false);

    // Make isMobile reactive and set in onMount
    let isMobile = $state(false);
    onMount(() => {
        isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    });

    // Get display name for tooltip/popover
    function getDisplayName(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
</script>

{#if !isMobile}
<Tooltip.Provider>
    <Tooltip.Root delayDuration={0}>
        <div class="inline-flex items-center justify-start gap-2 min-w-16">
            <Tooltip.Trigger>
                <div 
                    class="w-4 h-4 flex items-center justify-center cursor-pointer"
                    role="button"
                    tabindex="0"
                    onmouseenter={() => isIconHovered = true}
                    onmouseleave={() => isIconHovered = false}
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
{:else}
<Popover.Root bind:open={isPopoverOpen}>
    <div class="inline-flex items-center justify-start gap-2 min-w-16">
        <Popover.Trigger>
            <button
                type="button"
                class="w-4 h-4 flex items-center justify-center cursor-pointer"
                ontouchstart={() => { isIconHovered = true; isPopoverOpen = true; }}
                ontouchend={() => isIconHovered = false}
                onclick={() => { isIconHovered = true; isPopoverOpen = true; }}
                onkeydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        isIconHovered = true;
                        isPopoverOpen = true;
                        e.preventDefault();
                    }
                }}
                aria-label={getDisplayName(name)}
            >
                <Icon name={name} class="w-4 h-4 {isIconHovered ? 'primary-fg' : 'secondary-fg'}"/>
            </button>
        </Popover.Trigger>
        <NumberTicker value={data} class="span-small {isIconHovered ? 'primary-fg' : 'secondary-fg'}"/>
    </div>
    <Popover.Content side="top" class="span-small button-default capitalize tooltip-responsive">
        {getDisplayName(name)}
    </Popover.Content>
</Popover.Root>
{/if}