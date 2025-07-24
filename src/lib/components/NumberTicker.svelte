<script lang="ts">
    import { cubicOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { cn } from "$lib/utils";
    
    let {
        value = 100,
        initial = 0,
        duration = 6000,
        class: className = ""
    } = $props();
    
    function formatNumber(num: number): string {
        if (num >= 1e12) {
            return (num / 1e12).toFixed(1) + 'T';
        } else if (num >= 1e9) {
            return (num / 1e9).toFixed(1) + 'B';
        } else if (num >= 1e6) {
            return (num / 1e6).toFixed(1) + 'M';
        } else if (num >= 1e3) {
            return (num / 1e3).toFixed(1) + 'K';
        } else {
            return num.toFixed(0);
        }
    }
    
    // Calculate the maximum width needed to prevent jittering
    function getMaxWidth(): string {
        const maxValue = Math.max(value, initial);
        const formattedMax = formatNumber(maxValue);
        // Estimate width based on character count (rough approximation)
        const charCount = formattedMax.length;
        const estimatedWidth = Math.max(charCount * 0.6, 2); // Minimum 2rem width
        return `${estimatedWidth}rem`;
    }
    
    let num = tweened(initial, {
      duration: duration,
      easing: cubicOut,
    });
    
    // Debug logging
    console.log(`NumberTicker value:`, value);
    
    // Reactive statement to update animation when value changes
    $effect(() => {
        console.log(`NumberTicker updating to:`, value);
        num.set(value);
    });
</script>
  
<div
    class={cn(
        "inline-block span-small",
        className
    )}
    style="min-width: {getMaxWidth()};"
    >
    {formatNumber($num)}
</div>
  