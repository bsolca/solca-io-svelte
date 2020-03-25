<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 auto 1em;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.btn {
		@apply font-bold py-2 px-4 rounded;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-700;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1 class="bg-purple-700 text-white">Great success!</h1>

<figure>
	<img alt="Borat" src="great-success.png" />
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p>
	<strong>
		Try editing this file (src/routes/index.svelte) to test live reloading.
	</strong>
</p>

<center>
	<button class="btn btn-blue">tailwindcss example button</button>
</center>
