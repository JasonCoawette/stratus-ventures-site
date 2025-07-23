<script lang="ts">
    // PROPS
    let { 
        title = "project",
        tagline = "project tagline",
        link = "https://link-to-project"
    } = $props();
</script>

<a href={link} class="
    flex flex-col sm:flex-row justify-center items-start w-full h-fit
    py-5 gap-1 sm:gap-5 border-t border-fg hover:opacity-60 transition duration-300 ease-in-out
">
    <!-- TITLE -->
    <span class="span-title primary-fg w-full sm:min-w-2xs sm:max-w-2xs h-fit">{title}</span>

    <!-- TAGLINE -->
    <span class="span-tag w-full h-fit secondary-fg">{tagline}</span>
</a>