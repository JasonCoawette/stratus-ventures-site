<script lang="ts">
    import Link from '$lib/components/Link.svelte';
    import Icon from '$lib/components/Icons/Icon.svelte';
    import { onMount } from 'svelte';
    
    let isDark = false;
    
    onMount(() => {
        const theme = localStorage.getItem('theme') || 'system';
        if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            isDark = true;
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            isDark = false;
        }
    });
    
    function toggleDarkMode() {
        isDark = !isDark;
        
        if (isDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }
</script>

<footer aria-label="footer" class="
    flex flex-row justify-between items-center w-full h-fit
    mt-8 mb-16 gap-4
">
    <span class="span-small primary-fg opacity-40">
        © 2025 Stratus Ventures LLC
    </span>
    
    <div class="
        flex flex-row justify-end items-center w-fit h-fit
        gap-4
    ">
        <button 
            on:click={toggleDarkMode} 
            class="flex items-center justify-center w-6 h-6 cursor-pointer"
        >
            {#if isDark}
                <Icon name="sun" class="w-4 h-4" />
            {:else}
                <Icon name="moon" class="w-4 h-4" />
            {/if}
        </button>

        <Link href="mailto:jason@stratus-ventures.org" iconName="mail" classname="flex items-center justify-center w-6 h-6" />
        
        <Link href="https://x.com/jasoncoawette" iconName="x.com" classname="flex items-center justify-center w-6 h-6" />
    </div>
</footer>