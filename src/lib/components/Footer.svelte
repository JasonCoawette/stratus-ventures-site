<script>
    import Link from '$lib/components/Link.svelte'
</script>

<footer class="
    flex flex-row justify-between items-center w-full h-fit
    mt-6 md:mt-20 gap-4
">
    <!-- COPYWRITE -->
    <span class="span-tag secondary-fg">
        © 2025 Stratus Ventures LLC
    </span>
    
    <!-- LINK WRAPPER -->
    <div class="
        flex flex-row justify-end items-center w-fit h-fit
        gap-4 md:gap-5
    ">
        <Link href="mailto:jason@stratus-ventures.org" label="E-Mail" classname="font-normal"/>
        <Link iconName="x.com" iconSize={16} href="https://x.com/jasoncoawette"/>
    </div>
</footer>