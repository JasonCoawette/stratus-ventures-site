<script lang="ts">
    import Metric from "./Metric.svelte";
    import { onMount } from "svelte";

    let users = 0;
    let downloads = 0;
    let subscriptions = 0;


    // FETCHERS FOR METRIC DATA
    async function fetchUsers() {
        try {
            const response = await fetch('/api/metrics/users');
            const data = await response.json();
            users = data.count || 0;
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    }

    async function fetchDownloads() {
        try {
            const response = await fetch('/api/metrics/downloads');
            const data = await response.json();
            downloads = data.count || 0;
        } catch (error) {
            console.error('Failed to fetch downloads:', error);
        }
    }

    async function fetchSubscriptions() {
        try {
            const response = await fetch('/api/metrics/subscriptions');
            const data = await response.json();
            subscriptions = data.count || 0;
        } catch (error) {
            console.error('Failed to fetch subscriptions:', error);
        }
    }

    onMount(() => {
        fetchUsers();
        fetchDownloads();
        fetchSubscriptions();
    });

    
</script>

<div class="relative w-fit flex justify-center items-center gap-3 sm:gap-4">
    <Metric name="users" data={users} />
    <Metric name="downloads" data={downloads} />
    <Metric name="subscriptions" data={subscriptions} />
</div>