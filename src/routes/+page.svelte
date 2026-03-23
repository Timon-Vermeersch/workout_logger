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
				<div class="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 lg:grid-cols-4 text-white">
			<div class="rounded-md bg-ui-surface px-3 py-2">
				<p class="text-xs font-medium">ui.surface</p>
				<p class="text-[10px] text-white/70">#2E3C52</p>
			</div>

			<div class="rounded-md bg-brand-primary-light px-3 py-2">
				<p class="text-xs font-medium">brand.primary-light</p>
				<p class="text-[10px] text-white/70">#60A5FA</p>
			</div>

			<div class="rounded-md bg-brand-primary px-3 py-2">
				<p class="text-xs font-medium">brand.primary</p>
				<p class="text-[10px] text-white/70">#3B82F6</p>
			</div>

			<div class="rounded-md bg-ui-tile px-3 py-2">
				<p class="text-xs font-medium">ui.tile</p>
				<p class="text-[10px] text-white/70">#1E252E</p>
			</div>

			<div class="rounded-md bg-ui-bg px-3 py-2">
				<p class="text-xs font-medium">ui.bg</p>
				<p class="text-[10px] text-white/70">#2C3440</p>
			</div>

			<div class="rounded-md bg-brand-accent px-3 py-2">
				<p class="text-xs font-medium">brand.accent</p>
				<p class="text-[10px] text-white/70">#22C55E</p>
			</div>

			<div class="rounded-md bg-session-tile px-3 py-2">
				<p class="text-xs font-medium">session.tile</p>
				<p class="text-[10px] text-white/70">#34495E</p>
			</div>

			<div class="rounded-md bg-session-bg px-3 py-2">
				<p class="text-xs font-medium">session.bg</p>
				<p class="text-[10px] text-white/70">#2C3E50</p>
			</div>
			</div>
	
</div>




