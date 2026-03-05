<script>
    import { lookupExerciseById } from '$lib/utils/exercise-selector';
</script>


<button on:click={() =>  {console.log(lookupExerciseById(2))}} class='bg-gray-400'> test </button>