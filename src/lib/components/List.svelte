<script lang="ts">
    import ListItem from '$lib/components/ListItem.svelte';
    

    const products: {name: string, tagline: string, link: string}[] = [
        {name: "Arvis", tagline: "AR Heads-Up Display for Any Vehicle", link: "https://arvis.ai/"},
        {name: "Clovis", tagline: "AI Personal Financial and Budgeting assistant", link: "https://clovis.ai/"},
        {name: "Homer", tagline: "AI Home Operating System", link: "https://homer.ai/"},
        {name: "Numa", tagline: "AI Genetic Optimization Assistant", link: "https://numa.ai/"},
        {name: "Prodman", tagline: "AI Product Management Agent", link: "https://prodman.ai/"},
    ]

</script>

<ul class="flex flex-col w-full h-fit gap-0 border-b border-fg">
    {#each products as product}
        <li>
            <ListItem title={product.name} tagline={product.tagline} link={product.link}/>
        </li>
    {/each}
</ul>