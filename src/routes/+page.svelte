<script>
    import Button from '$lib/components/Button.svelte'
    import Globe from '$lib/components/Globe.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Link from '$lib/components/Link.svelte'
    import List from '$lib/components/List.svelte'
</script>

<div class="
    flex flex-col jusitfy-start items-center w-full h-screen
    p-5 sm:p-8
">

    <!-- CONTAINER -->
    <main class="
        flex flex-col justify-start items-center w-full h-fit 
        gap-6 max-w-5xl pb-20
    ">

        <!-- HERO -->
        <section class="
            flex flex-col sm:flex-row justify-start md:justify-center items-center w-full h-fit 
            gap-[-6rem] sm:gap-6 relative
        ">

            <!-- HEADING WRAPPER -->
            <div class="
                flex flex-col justify-start items-start w-full h-fit min-w-2xs
                lg:min-w-xl pt-4 sm:pt-0 gap-4 sm:gap-6 backdrop-blur-xl sm:backdrop-blur-none 
                bg-gradient-overlay sm:bg-none
                order-2 md:order-1
                relative z-10 -mt-32 sm:mt-0
            ">
                <h1 class="heading-1 primary-fg">Stratus</h1>
                <p class="paragraph primary-fg">
                    Stratus Ventures LLC owns and leads a group of product-focused ventures founded by
                    <Link href="https://x.com/jasoncoawette" label="Jason Coawette"/>
                    and is located in Phoenix, Arizona.
                </p>

                <!-- BUTTON WRAPPER -->
                <div class="
                    flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full h-fit 
                    gap-3 sm:gap-4 mt-4
                ">
                    <Button href="https://cal.com/stratus-ventures.org/coffee-chat" label="Book a Call"/>
                    <Button href="mailto:jason@stratus-ventures.org" variant="outlined" label="E-Mail"/>
                </div>
            </div>

            <Globe />
        </section>

        <List />
        <Footer/>
    </main>

</div>