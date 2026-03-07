import { writable } from 'svelte/store';
import type { builtProgram } from '$lib/interfaces/builtProgram';
import type { GlobalExerciselist } from '$lib/interfaces/global-exercise-list';
import type { ProgramDay } from '$lib/interfaces/programDay';
import type { EquipmentTypes, muscleGroupTypes } from '../interfaces/exercise';
import type { ActiveProgramRef } from '$lib/interfaces/activeProgramRef';
import type { ExerciseHistory } from '$lib/interfaces/exerciseHistory';
import type { DayHistory } from '$lib/interfaces/dayHistory';

//derived<completedProgramDaysHistory>?
export const exerciseHistory = writable<ExerciseHistory[]>([
	{
		exerciseId: 1, // Flat Bench Press
		historyArray: [
			{
				date: '2025-08-01',
				sets: [
					{ setNumber: 1, weight: 100, reps: 10 },
					{ setNumber: 2, weight: 100, reps: 8 },
					{ setNumber: 3, weight: 90, reps: 6 }
				]
			},
			{
				date: '2025-08-04',
				sets: [
					{ setNumber: 1, weight: 110, reps: 10 },
					{ setNumber: 2, weight: 110, reps: 8 },
					{ setNumber: 3, weight: 100, reps: 6 }
				]
			}
		]
	},
	{
		exerciseId: 2, // Pull-Ups
		historyArray: [
			{
				date: '2025-08-02',
				sets: [
					{ setNumber: 1, reps: 12 },
					{ setNumber: 2, reps: 10 },
					{ setNumber: 3, reps: 8 }
				]
			},
			{
				date: '2025-08-05',
				sets: [
					{ setNumber: 1, reps: 15 },
					{ setNumber: 2, reps: 12 },
					{ setNumber: 3, reps: 10 }
				]
			}
		]
	},
	{
		exerciseId: 3, // Incline Dumbbell Press
		historyArray: [
			{
				date: '2025-08-01',
				sets: [
					{ setNumber: 1, weight: 30, reps: 10 },
					{ setNumber: 2, weight: 30, reps: 10 },
					{ setNumber: 3, weight: 25, reps: 8 }
				]
			},
			{
				date: '2025-08-04',
				sets: [
					{ setNumber: 1, weight: 35, reps: 10 },
					{ setNumber: 2, weight: 35, reps: 10 },
					{ setNumber: 3, weight: 30, reps: 8 }
				]
			}
		]
	},
	{
		exerciseId: 4, // Barbell Row
		historyArray: [
			{
				date: '2025-08-02',
				sets: [
					{ setNumber: 1, weight: 60, reps: 10 },
					{ setNumber: 2, weight: 60, reps: 8 }
				]
			},
			{
				date: '2025-08-05',
				sets: [
					{ setNumber: 1, weight: 70, reps: 10 },
					{ setNumber: 2, weight: 70, reps: 8 }
				]
			}
		]
	},
]);
//filled when clicked ->flushed to history (persistent)
export const completedProgramDaysHistory = writable<DayHistory[]>([
	{
		dayNumber: 1,
		date: '2025-08-01',
		exercises: [
			{
				exerciseId: 1,
				sets: [
					{ setNumber: 1, weight: 100, reps: 10 },
					{ setNumber: 2, weight: 100, reps: 8 },
					{ setNumber: 3, weight: 90, reps: 6 }
				]
			},
			{
				exerciseId: 3,
				sets: [
					{ setNumber: 1, weight: 30, reps: 10 },
					{ setNumber: 2, weight: 30, reps: 10 },
					{ setNumber: 3, weight: 25, reps: 8 }
				]
			}
		]
	},
]);
//Exerciseslist (persistent)
export const Exerciseslist = writable<GlobalExerciselist>({
	exercises: [
		{
			id: 1,
			name: 'Flat Bench Press',
			explanation: 'just bench BRO',
			exerciseGif: '/gifs/rat.gif',
			muscleGroups: new Set<muscleGroupTypes>(['chest', 'triceps']),
			equipmentUsed: new Set<EquipmentTypes>(['barbell'as EquipmentTypes , 'smith machine'as EquipmentTypes])
		},
		{
			id: 2,
			name: 'Pull-Ups',
			explanation: 'bodyweight back builder',
			muscleGroups: new Set<muscleGroupTypes>(['back', 'biceps']),
			equipmentUsed: new Set<EquipmentTypes>(['pull-up bar' as EquipmentTypes])
		},
		{
			id: 3,
			name: 'Incline Dumbbell Press',
			explanation: 'upper chest focus',
			muscleGroups: new Set<muscleGroupTypes>(['chest', 'triceps']),
			equipmentUsed: new Set<EquipmentTypes>(['dumbbells'])
		},
		{
			id: 4,
			name: 'Barbell Row',
			explanation: 'targets lats and traps',
			muscleGroups: new Set<muscleGroupTypes>(['back', 'biceps']),
			equipmentUsed: new Set<EquipmentTypes>(['barbell'])
		},
		{
			id: 5,
			name: 'Triceps Pushdown',
			explanation: 'pump those horseshoes',
			muscleGroups: new Set<muscleGroupTypes>(['triceps']),
			equipmentUsed: new Set<EquipmentTypes>(['cable machine'])
		}
	]
});
//personalProgram gets populated when the currentActiveBuiltProgram get loaded and this is this initialization (persistent?)
export const personalProgram = writable<ProgramDay>({
	dayNumber: 1,
	exercises: []
});
//builtPrograms is your actual book containing all your programs (persistent)
export const builtPrograms = writable<Array<builtProgram>>([
	// this obj is 1 selectedTobuild
	{
		name: 'Nsuns1',
		days: [
			{
				dayNumber: 1,
				label: 'Chest Hypertrophy',
				exercises: [
					//set exercise:{} to exerciseId:number
					{
						exerciseId: 1,
						sets: [
							{ setNumber: 1, reps: 12, weight: 100 },
							{ setNumber: 2, reps: 10, weight: 100 },
							{ setNumber: 3, reps: 8, weight: 100 },
							{ setNumber: 4, reps: 6, weight: 100 }
						]
					},
					{
						exerciseId: 2,
						sets: [
							{ setNumber: 1, reps: 10 },
							{ setNumber: 2, reps: 10 },
							{ setNumber: 3, reps: 8 }
						]
					}
				]
			},
			{
				dayNumber: 2,
				label: 'Back Strength',
				exercises: [
					{
						exerciseId: 3,
						sets: [
							{ setNumber: 1, reps: 12 },
							{ setNumber: 2, reps: 10 },
							{ setNumber: 3, reps: 8 }
						]
					},
					{
						exerciseId: 4,
						sets: [
							{ setNumber: 1, reps: 10 },
							{ setNumber: 2, reps: 10 },
							{ setNumber: 3, reps: 10 }
						]
					}
				]
			}
		]
	},
	{
	name: 'Nsuns2',
	days: [
		{
			dayNumber: 1,
			label: 'Push Strength',
			exercises: [
				{
					exerciseId: 1, // Flat Bench Press
					sets: [
						{ setNumber: 1, reps: 8, weight: 105 },
						{ setNumber: 2, reps: 6, weight: 105 },
						{ setNumber: 3, reps: 5, weight: 105 },
						{ setNumber: 4, reps: 4, weight: 105 }
					]
				},
				{
					exerciseId: 3, // Incline Dumbbell Press
					sets: [
						{ setNumber: 1, reps: 10, weight: 32 },
						{ setNumber: 2, reps: 10, weight: 32 },
						{ setNumber: 3, reps: 8, weight: 32 }
					]
				},
				{
					exerciseId: 5, // Triceps Pushdown
					sets: [
						{ setNumber: 1, reps: 12 },
						{ setNumber: 2, reps: 12 },
						{ setNumber: 3, reps: 10 }
					]
				}
			]
		},
		{
			dayNumber: 2,
			label: 'Pull Strength',
			exercises: [
				{
					exerciseId: 2, // Pull Ups
					sets: [
						{ setNumber: 1, reps: 10 },
						{ setNumber: 2, reps: 8 },
						{ setNumber: 3, reps: 8 }
					]
				},
				{
					exerciseId: 4, // Barbell Row
					sets: [
						{ setNumber: 1, reps: 10, weight: 70 },
						{ setNumber: 2, reps: 10, weight: 70 },
						{ setNumber: 3, reps: 8, weight: 70 }
					]
				}
			]
		}
	]
	},
]);
//CurrentActiveBuiltProgram is just a setting of which builtprogram to display and to work with (probably not persistent but a setting thing?)
export const CurrentActiveBuiltProgram = writable<ActiveProgramRef>({
	name: 'Nsuns1',
	currentDay: 1,
	daysAmount: 2
});

// export const ExerciseHistory
