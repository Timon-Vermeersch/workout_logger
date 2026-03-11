<script>
	import Button from '$lib/components/Button.svelte';
	import HeaderTopBar from '$lib/components/HeaderTopBar.svelte';
    import { builtPrograms, completedProgramDaysHistory, Exerciseslist } from '$lib/stores/data_store';

    function resetData() {
		completedProgramDaysHistory.set([]);
		Exerciseslist.set({ exercises: [] });
		builtPrograms.set([]);

		localStorage.removeItem('completedProgramDaysHistory');
		localStorage.removeItem('Exerciseslist');
		localStorage.removeItem('builtPrograms');
	}
	// export const prerender = true;
</script>

<div class="sticky top-0 grid min-h-12 grid-cols-[25%_50%_25%] items-center bg-gray-800 text-white">
	<div class="flex justify-center rounded-4xl hover:bg-gray-700">
		<button
		>
			Load! or smth
		</button>
	</div>

	<select
		
		
		class="flex items-center justify-center rounded-4xl bg-gray-800 text-center text-white hover:bg-gray-700"
	>
		<option value="DaySelect">SelectDay</option>
		<option value="DaySelect">SelectSecondDay</option>
	</select>

	<button
		class="flex justify-center rounded-4xl hover:bg-gray-700"
		on:click={(e) => {
			console.log(e.currentTarget);
		}}>EditMode!?</button
	>
</div>

<div class="BODY min-h-[calc(100vh-56px)] bg-gray-700 text-white">
	<Button on:click={resetData}>Reset Data (dont click it)</Button>
	
</div>
