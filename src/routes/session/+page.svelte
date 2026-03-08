<script lang="ts">
	import Stopwatch from '../../lib/components/stopwatch.svelte';
	import more from '../../lib/svg/more.svg';
	import less from '../../lib/svg/less.svg';
	import next from '../../lib/svg/next.svg';
	import replace from '../../lib/svg/switch.svg';
	import Dialog from '../../lib/components/dialog.svelte';
	import {
		personalProgram,
		Exerciseslist,
		CurrentActiveBuiltProgram,
		builtPrograms,
		exerciseHistory,
		completedProgramDaysHistory
	} from '../../lib/stores/data_store';
	import type { Exercise } from './../../lib/interfaces/exercise';
	import type { PlannedExercise } from '$lib/interfaces/plannedExercise';
	import { onMount } from 'svelte';
	import type { ExerciseHistory } from '$lib/interfaces/exerciseHistory';
	import { lookupExerciseById } from '../../lib/utils/exercise-selector';
	import type { DayHistory } from '$lib/interfaces/dayHistory';
	// import { get } from 'svelte/store';

	let dialog: Dialog;
	let selectedExerciseIndex: number | null = null;
	// let selectedSwapExercise: PlannedExercise | null = null;
	let selectedSwapExercise: number | null = null;
	let currentActiveBuiltProgramName: string | null;
	let currentActiveBuiltProgramDayNumber: number | null;
	let currentDayLabel: string | undefined;

	onMount(() => {
		setupDay();
	});

	function setupDay() {
		currentActiveBuiltProgramName = $CurrentActiveBuiltProgram.name;
		currentActiveBuiltProgramDayNumber = $CurrentActiveBuiltProgram.currentDay;

		const allPrograms = $builtPrograms;
		const selectedProgram = allPrograms.find((p) => p.name === currentActiveBuiltProgramName);
		if (!selectedProgram) return;

		const day = selectedProgram.days.find(
			(d) => d.dayNumber === currentActiveBuiltProgramDayNumber
		);
		if (!day) return;

		currentDayLabel = day.label;
		personalProgram.set({ ...day });
	}

	function knop() {
		console.log(currentActiveBuiltProgramName);
	}

	function swapExercise(plannedExerciseIndex: number) {
		selectedExerciseIndex = plannedExerciseIndex;
		dialog.showModal();
	}

	function confirmSwap() {
		if (selectedExerciseIndex !== null && selectedSwapExercise) {
			personalProgram.update((program) => {
				const copyProgram = { ...program };
				const currentPlannedExercise = copyProgram.exercises[selectedExerciseIndex];
				console.log(currentPlannedExercise);
				currentPlannedExercise.exerciseId = selectedSwapExercise;
				currentPlannedExercise.sets = [];
				return copyProgram;
			});
			dialog.close();
			selectedExerciseIndex = null;
			selectedSwapExercise = null;
		}
	}

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'CET'
	};

	const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());

	function addSet(index: number): void {
		personalProgram.update((program) => {
			const copyProgram = { ...program };
			const currentExercise = copyProgram.exercises[index];
			const newSet = { setNumber: currentExercise.sets.length + 1 };
			currentExercise.sets.push(newSet);
			return copyProgram;
		});
	}

	function removeSet(index: number): void {
		personalProgram.update((program) => {
			const copyProgram = { ...program };
			const currentExercise = copyProgram.exercises[index];
			currentExercise.sets.pop();
			return copyProgram;
		});
	}

	// function flushSessionToHistory() {
	// 	// const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
	// 	const today = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
	// 	const program = $personalProgram;

	// 	// 1. Push to completedProgramDays
	// 	completedProgramDaysHistory.update((days) => {
	// 		return [
	// 			...days,
	// 			{
	// 				dayNumber: days.length + 1,
	// 				date: today,
	// 				exercises: program.exercises.map((pe) => ({
	// 					exerciseId: pe.exercise.id,
	// 					sets: pe.sets
	// 				}))
	// 			}
	// 		];
	// 	});

	// 	// 2. Push to exerciseHistory (append by exerciseId)
	// 	exerciseHistory.update((history) => {
	// 		const updated = [...history];

	// 		for (const pe of program.exercises) {
	// 			const existing = updated.find((h) => h.exerciseId === pe.exerciseId);
	// 			const entry = {
	// 				date: today,
	// 				sets: pe.sets
	// 			};

	// 			if (existing) {
	// 				existing.historyArray.push(entry);
	// 			} else {
	// 				updated.push({
	// 					exerciseId: pe.exerciseId,
	// 					historyArray: [entry]
	// 				});
	// 			}
	// 		}

	// 		return updated;
	// 	});

	// 	// 3. Optionally clear the sets
	// 	personalProgram.update((p) => {
	// 		const cleared = { ...p };
	// 		cleared.exercises = cleared.exercises.map((ex) => ({
	// 			...ex,
	// 			sets: []
	// 		}));
	// 		return cleared;
	// 	});
	// }

	//FlushWithUIchange
	function goToNextDay() {
		// flushSessionToHistory();
		goToNextDayTest();
		CurrentActiveBuiltProgram.update((program) => {
			const nextDay = program.currentDay + 1;
			const wrappedDay = nextDay > program.daysAmount ? 1 : nextDay;
			return { ...program, currentDay: wrappedDay };
		});

		setupDay();
	}

	//FlushWithoutUIchange
	function goToNextDayTest() {
		// from programDay
		let justToday = $personalProgram;
		// to dayHistory
		// let HistoryDestination = $completedProgramDaysHistory

		const today = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
		let tempDayToFillAndPush: DayHistory = {
			dayNumber: justToday.dayNumber,
			date: today,
			exercises: justToday.exercises.map((e) => ({
				exerciseId: e.exerciseId,
				sets: [...e.sets]
			}))
		};

		console.log('pre', $completedProgramDaysHistory);
		$completedProgramDaysHistory = [...$completedProgramDaysHistory, tempDayToFillAndPush];

		console.log('Post', $completedProgramDaysHistory);
	}
	//structuredClone($exerciseHistory)?
	//temphistory = actualhistrory
	//temphistory.update(xxxxx)
	//actualhistrory = temphistory

	//plannedExercise.exercise.name
</script>

<div class="bg-gray-700">
	<div class="bg-gray-700 p-4">
		<div
			class="grid [grid-template-columns:35%_30%_35%] items-center rounded bg-gray-800 p-4 text-white"
		>
			<div class="text-center">Current: {currentActiveBuiltProgramName}</div>
			<button class="text-center font-bold">{currentDayLabel}</button>
			<div class="text-center">{formattedDate}</div>
		</div>

		<Stopwatch />

		<!-- start -->
		<div class="bg flex min-h-dvh flex-auto flex-col space-y-4">
			{#each $personalProgram.exercises as plannedExercise, index}
				{@const exercise = lookupExerciseById(plannedExercise.exerciseId)}
				<div class="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow">
					<div class="mb-2 grid grid-cols-2">
						<h2 class="Title flex flex-col flex-wrap font-semibold text-white">
							{index + 1}: {exercise.name || 'Unknown exercise'}
							<div class="mb-1 text-xs text-gray-400">4 Sets : 12 Reps</div>
						</h2>

						<div class="Buttons align-center m-1 flex h-12 items-center justify-end space-x-2">
							<button
								on:click={() => addSet(index)}
								class="rounded-lg bg-gray-600 p-2 text-white hover:bg-gray-500 active:scale-90"
							>
								<img class="h-5 w-5 brightness-0 invert filter" src={more} alt="Add Set" />
							</button>

							<button
								on:click={() => removeSet(index)}
								class="rounded-lg bg-gray-600 p-2 text-white hover:bg-gray-500 active:scale-90"
							>
								<img class="h-5 w-5 brightness-0 invert filter" src={less} alt="Remove Set" />
							</button>

							<button
								on:click={() => swapExercise(index)}
								class="rounded-lg bg-gray-600 p-2 text-white hover:bg-gray-500 active:scale-90"
							>
								<img class="h-5 w-5 brightness-0 invert filter" src={replace} alt="Remove Set" />
							</button>
						</div>
					</div>
					<!-- Prev series -->
					<div class="mb-4">
						<div class="mb-1 text-xs text-gray-400">Previous Series:</div>
						<div class="flex flex-row overflow-x-auto">
							{#each plannedExercise.sets as set}
								<input
									bind:value={set.previous}
									class="m-1 w-14 rounded bg-gray-600 text-sm text-white"
									readonly
								/>
							{/each}
						</div>
					</div>
					<!-- Current series -->
					<div>
						<div class="mb-1 text-xs text-gray-400">Current Series:</div>
						<div class="flex flex-row overflow-x-auto">
							{#each plannedExercise.sets as set}
								{#if set}
									<div class="m-1 flex w-15 flex-col items-center">
										<input
											bind:value={set.weight}
											type="number"
											class="h-7 w-14 border-t border-r border-l bg-green-600 text-sm text-white"
											placeholder="KG?"
										/>
										<input
											bind:value={set.reps}
											type="number"
											class="h-7 w-14 border-r border-b border-l bg-blue-600 text-sm text-white"
											placeholder="Reps?"
										/>
									</div>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/each}

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				on:click={goToNextDay}
				class="cursor-pointer rounded-lg border border-gray-700 bg-gray-800 p-4 shadow transition hover:bg-gray-700 active:scale-95"
			>
				<div class="mb-2 grid grid-cols-2">
					<h2 class="Title flex flex-col flex-wrap font-semibold text-white">
						➕ End Day
						<div class="mb-1 text-xs text-gray-400">Go to the next workout day</div>
					</h2>
					<div class="flex items-center justify-end">
						<img src={next} alt="Next Day" class="h-6 w-6 brightness-0 invert filter" />
					</div>
				</div>
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				on:click={goToNextDayTest}
				class="cursor-pointer rounded-lg border border-gray-700 bg-gray-800 p-4 text-white shadow transition hover:bg-gray-700 active:scale-95"
			>
				hallo ik knop
			</div>
		</div>
	</div>
</div>

<Dialog bind:dialog>
	<div class="w-96 max-w-full bg-gray-800 p-6 text-white">
		<h2 class="mb-4 text-xl font-bold">Choose your Pokemon</h2>

		<!-- Scrollable list with max height -->
		<div class="max-h-64 space-y-3 overflow-y-auto">
			{#each $Exerciseslist.exercises as exercise}
				<button
					class={`block w-full rounded p-3 ${selectedSwapExercise === exercise.id ? 'bg-green-600' : 'bg-gray-600'} hover:bg-gray-500`}
					on:click={() => (selectedSwapExercise = exercise.id)}
				>
					{exercise.name}
				</button>
			{/each}
		</div>

		<div class="mt-6 flex justify-end space-x-3">
			<button
				class="rounded bg-red-500 p-3 text-white"
				on:click={() => {
					dialog.close();
					selectedSwapExercise = null;
					console.log('cancelled', selectedSwapExercise);
				}}>Cancel</button
			>
			<button
				class="rounded bg-green-500 p-3 text-white disabled:bg-gray-400"
				on:click={confirmSwap}
				disabled={selectedSwapExercise === null}>Confirm</button
			>
		</div>
	</div>
</Dialog>
