<script>
    export let technoList;
</script>

<style>
    h1 {
        @apply text-red-500 text-center text-6xl font-black;
    }
</style>

<section>
    {#if technoList}
        <h1>All technologies that I love</h1>
        <ul>
            {#each technoList as techno}
                <li>{techno.name}</li>
            {/each}
        </ul>
    {:else}
        <h1>Love need time</h1>
    {/if}
</section>