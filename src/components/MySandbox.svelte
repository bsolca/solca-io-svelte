<script>
    export let technoList;
</script>

<style>
    h1, .noTechno {
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
        <div class="noTechno"><em>Love need time</em></div>
    {/if}
</section>