<script lang="ts">
    import Icon from '$lib/components/Icons/Icon.svelte';
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

    // State to track if icon is being hovered
    let isIconHovered = $state(false);

    // Get display name for tooltip
    function getDisplayName(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

</script>

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
                    ontouchstart={() => isIconHovered = true}
                    ontouchend={() => isIconHovered = false}
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