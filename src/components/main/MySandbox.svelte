<script>
    export let technoList;
</script>

<style>
    .myGrid {
        @apply bg-blue-100 flex justify-center text-gray-900;
    }

    .myGrid > div {
        @apply inline-flex bg-yellow-500 m-3 p-3;
    }

    h1 {
        @apply text-red-500 text-center text-6xl font-black;
    }
</style>

<section>
    {#if technoList}
        <h1>All technologies that I love</h1>
        <div class="myGrid">
            {#each technoList as techno}
                <div>{techno.name}</div>
            {/each}
        </div>
    {:else}
        <h1>Love need time</h1>
    {/if}
</section>