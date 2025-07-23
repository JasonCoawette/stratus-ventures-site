<script>
    import Link from '$lib/components/Link.svelte'
    import Icon from '$lib/components/Icon.svelte'
    import { onMount } from 'svelte';
    
    // Dark mode toggle
    let isDark = false;
    
    onMount(() => {
        // Check for saved theme preference or default to system preference
        const theme = localStorage.getItem('theme') || 'system';
        if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            isDark = true;
        } else {
            document.documentElement.classList.remove('dark');
            isDark = false;
        }
    });
    
    function toggleDarkMode() {
        isDark = !isDark;
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
    
</script>

<footer class="
    flex flex-row justify-between items-center w-full h-fit
    my-16 gap-4
">
    <!-- COPYWRITE -->
    <span class="disclaimer secondary-fg">
        © 2025 Stratus Ventures LLC
    </span>
    
    <!-- BUTTON & LINK WRAPPER -->
    <div class="
        flex flex-row justify-end items-center w-fit h-fit
        gap-4 md:gap-5
    ">

        <button 
            on:click={toggleDarkMode} 
            class="flex items-center justify-center w-6 h-6 secondary-fg hover:text-primary-fg transition-colors duration-300 ease-in-out cursor-pointer"
        >
            {#if isDark}
                <Icon name="sun" class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {:else}
                <Icon name="moon" class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {/if}
        </button>
        
        <a 
            href="mailto:jason@stratus-ventures.org" 
            class="flex items-center justify-center w-6 h-6 secondary-fg hover:text-primary-fg transition-colors duration-300 ease-in-out"
        >
            <Icon name="mail" class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
        
        <a 
            href="https://x.com/jasoncoawette" 
            class="flex items-center justify-center w-6 h-6 secondary-fg hover:text-primary-fg transition-colors duration-300 ease-in-out"
        >
            <Icon name="x.com" class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
    </div>
</footer>