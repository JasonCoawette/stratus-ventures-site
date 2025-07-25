<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Globe from '$lib/components/globe/Globe.svelte';    
    import Footer from '$lib/components/Footer.svelte';
    import Link from '$lib/components/Link.svelte';
    import List from '$lib/components/List.svelte';
	import MetricsBlock from '$lib/components/MetricsBlock.svelte';
</script>

<div class="
    flex flex-col jusitfy-start items-center w-full h-fit sm:h-screen
    p-5 sm:p-8
">
    <main class="
        flex flex-col justify-start items-center w-full h-fit 
        gap-6 max-w-sm sm:max-w-5xl pb-20 sm:pb-16
    ">
        <!-- HERO SECTION -->
        <section aria-label="hero section" class="
            relative
            flex flex-col sm:flex-row justify-start md:justify-center items-start sm:items-center w-full h-fit 
            sm:gap-6
        ">

            <!-- HEADING WRAPPER -->
            <div class="
                relative
                flex flex-col justify-start items-start w-full h-fit min-w-2xs
                lg:min-w-xl pt-6 sm:pt-0 gap-4 sm:gap-6 order-2 sm:order-1 pb-6 sm:pb-0
            ">
                <h1 class="heading-1 primary-fg">Stratus</h1>
                <p class="paragraph primary-fg">
                    Stratus Ventures LLC owns a group of product-focused ventures founded by
                    <Link href="https://x.com/jasoncoawette" label="Jason Coawette"/>
                    and is located in Phoenix, Arizona.
                </p>

                <div class="
                    relative
                    flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full h-fit 
                    gap-3 sm:gap-4 mt-4
                ">
                    <Button href="https://cal.com/stratus-ventures.org/coffee-chat" label="Book a Call"/>
                    <Button href="mailto:jason@stratus-ventures.org" variant="outlined" label="E-Mail"/>
                </div>
            </div>

            <!-- HERO GRAPHIC -->
            <div class="relative flex flex-col items-start justify-center w-full h-fit max-w-sm order-1 sm:order-2">
                <!-- GLOBE -->
                <div class="relative flex w-full aspect-square skeleton">
                    <Globe />
                </div>

                <!-- METRICS -->
                <MetricsBlock />
            </div>
        </section>

        <List />
        <Footer/>
    </main>
</div>