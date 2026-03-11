<script>
	import Button from '$lib/components/Button.svelte';
	import HeaderTopBar from '$lib/components/HeaderTopBar.svelte';
	import {
		builtPrograms,
		completedProgramDaysHistory,
		Exerciseslist
	} from '$lib/stores/data_store';

	function resetCompletedProgramDaysHistory() {
		completedProgramDaysHistory.set([]);
		localStorage.removeItem('completedProgramDaysHistory');
	}

	function resetExercisesList() {
		Exerciseslist.set({ exercises: [] });
		localStorage.removeItem('Exerciseslist');
	}

	function resetBuiltPrograms() {
		builtPrograms.set([]);
		localStorage.removeItem('builtPrograms');
	}

	function resetAllData() {
		resetCompletedProgramDaysHistory();
		resetExercisesList();
		resetBuiltPrograms();
	}

	// export const prerender = true;
</script>

<div class="sticky top-0 grid min-h-12 grid-cols-[25%_50%_25%] items-center bg-gray-800 text-white">
	<div class="flex justify-center rounded-4xl hover:bg-gray-700">
		<button>
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
		}}
	>
		EditMode!?
	</button>
</div>

<div class="BODY min-h-[calc(100vh-56px)] bg-gray-700 p-4 text-white">
	<div class="grid grid-cols-2 gap-4">
		<Button on:click={resetCompletedProgramDaysHistory}>
			Reset completed history
		</Button>

		<Button on:click={resetExercisesList}>
			Reset exercises list
		</Button>

		<Button on:click={resetBuiltPrograms}>
			Reset built programs
		</Button>

		<Button on:click={resetAllData}>
			Reset all data
		</Button>
	</div>
</div>