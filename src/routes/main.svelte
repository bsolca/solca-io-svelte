<script>
    import Presentation from "../components/main/Presentation.svelte";
    import MySandbox from "../components/main/MySandbox.svelte";
    import technoList from './techno/_techno';

    function sortTechnoList() {
        // TODO Sort the list in alphabetical order
    }
</script>

<Presentation name="Benjamin"/>
<MySandbox technoList={technoList}/>