<script>
    import Presentation from "../components/main/Presentation.svelte";
    import MySandbox from "../components/main/MySandbox.svelte";

    let technoList = [
        {
            name: 'HTML/CSS'
        },
        {
            name: 'Javascript',
        },
        {
            name: 'Java',
        },
        {
            name: 'C++',
        },
        {
            name: 'React.js',
        },
        {
            name: 'React Native',
        },
        {
            name: 'Angular',
        },
        {
            name: 'Go lang',
        },
        {
            name: 'Xamarin',
        },

    ];

    function sortTechnoList() {
        // TODO Sort the list in alphabetical order
    }
</script>

<Presentation/>
<MySandbox technoList={technoList}/>