import { writable } from 'svelte/store';
import type { builtProgram } from '$lib/interfaces/builtProgram';
import type { GlobalExerciselist } from '$lib/interfaces/global-exercise-list';
import type { ProgramDay } from '$lib/interfaces/programDay';
import type { equipment, muscleGroupTypes } from '../interfaces/exercise';
import type { ActiveProgramRef } from '$lib/interfaces/activeProgramRef';
import type { ExerciseHistory } from '$lib/interfaces/exerciseHistory';

export const exerciseHistory = writable<ExerciseHistory[]>([
	
  ]);

export const Exerciseslist = writable<GlobalExerciselist>({
	exercises: [
		{
			id: 1,
			name: 'Flat Bench Press',
			explanation: 'just bench BRO',
			exerciseGif: '/gifs/rat.gif',
			muscleGroups: new Set<muscleGroupTypes>(['chest', 'triceps']),
			equipmentUsed: new Set<Equipment>(['barbell'  as Equipment , 'smith machine '])
		},
		{
			id: 2,
			name: 'Pull-Ups',
			explanation: 'bodyweight back builder',
			muscleGroups: new Set<muscleGroupTypes>(['back', 'biceps']),
			equipmentUsed: new Set<Equipment>(['pull-up bar' as Equipment])
		},
		{
			id: 3,
			name: 'Incline Dumbbell Press',
			explanation: 'upper chest focus',
			muscleGroups: new Set<muscleGroupTypes>(['chest', 'triceps']),
			equipmentUsed: new Set<Equipment>(['dumbbells' as Equipment])
		},
		{
			id: 4,
			name: 'Barbell Row',
			explanation: 'targets lats and traps',
			muscleGroups: new Set<muscleGroupTypes>(['back', 'biceps']),
			equipmentUsed: new Set<Equipment>(['barbell' as Equipment])
		},
		{
			id: 5,
			name: 'Triceps Pushdown',
			explanation: 'pump those horseshoes',
			muscleGroups: new Set<muscleGroupTypes>(['triceps']),
			equipmentUsed: new Set<Equipment>(['cable machine' as Equipment])
		}
	]
});

export const personalProgram = writable<ProgramDay>({
	dayNumber: 1,
	exercises: []
});

//fixed builtPrograms

export const builtPrograms = writable<Array<builtProgram>>([
	// this obj is 1 selectedTobuild
	{
		name: 'Nsuns1',
		days: [
			{
				dayNumber: 1,
				label: 'Chest Hypertrophy',
				exercises: [
					{
						exercise: {
							id: 1,
							name: 'Barbell Bench Press',
							exerciseGif: 'benchGifString',
							explanation: 'Classic chest compound exercise.',
							muscleGroups: new Set(['chest', 'triceps', 'front delts']),
							exerciseHistoryId: 1,
							exerciseHistory: {
								exerciseId: 1,
								date: new Date(),
								sets: [
									{
										id: 1,
										exerciseHistoryId: 1,
										setNumber: 1,
										weight: 100,
										reps: 10,
										wrapsUsed: false,
										strapsUsed: false,
										sleevesUsed: true,
										rpe: 8,
										extraNote: 'Felt solid, good control'
									}
								]
							}
						},
						sets: [
							{ setNumber: 1, reps: 12 , weight: 100},
							{ setNumber: 2, reps: 10 , weight: 100},
							{ setNumber: 3, reps: 8 , weight: 100},
							{ setNumber: 4, reps: 6 , weight: 100}
						]
					},
					{
						exercise: {
							id: 2,
							name: 'Incline Dumbbell Press',
							exerciseGif: 'inclineDumbbellGif',
							explanation: 'Targets upper chest with more stretch.',
							muscleGroups: new Set(['upper chest', 'front delts']),
							exerciseHistoryId: 2,
							exerciseHistory: {
								exerciseId: 2,
								date: new Date(),
								sets: [
									{
										id: 1,
										exerciseHistoryId: 2,
										setNumber: 1,
										weight: 30,
										reps: 10,
										wrapsUsed: false,
										strapsUsed: false,
										sleevesUsed: false,
										rpe: 7,
										extraNote: 'Could go heavier'
									}
								]
							}
						},
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
						exercise: {
							id: 3,
							name: 'Seated Cable Row',
							exerciseGif: 'seatedRowGifString',
							explanation: 'Mid-back thickness builder.',
							muscleGroups: new Set(['lats', 'rhomboids', 'biceps']),
							exerciseHistoryId: 3,
							exerciseHistory: {
								exerciseId: 3,
								date: new Date(),
								sets: [
									{
										id: 1,
										exerciseHistoryId: 3,
										setNumber: 1,
										weight: 60,
										reps: 12,
										wrapsUsed: false,
										strapsUsed: true,
										sleevesUsed: false,
										rpe: 8,
										extraNote: 'Back felt pumped'
									}
								]
							}
						},
						sets: [
							{ setNumber: 1, reps: 12 },
							{ setNumber: 2, reps: 10 },
							{ setNumber: 3, reps: 8 }
						]
					},
					{
						exercise: {
							id: 4,
							name: 'Lat Pulldown',
							exerciseGif: 'latPulldownGif',
							explanation: 'Vertical pulling motion for lats.',
							muscleGroups: new Set(['lats', 'biceps']),
							exerciseHistoryId: 4,
							exerciseHistory: {
								exerciseId: 4,
								date: new Date(),
								sets: [
									{
										id: 1,
										exerciseHistoryId: 4,
										setNumber: 1,
										weight: 50,
										reps: 10,
										wrapsUsed: false,
										strapsUsed: false,
										sleevesUsed: false,
										rpe: 7,
										extraNote: ''
									}
								]
							}
						},
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
		name: 'Nsuns-2-program',
		days: [
			{
				dayNumber: 1,
				label:'Back day Strength',
				exercises: [
					{
						exercise: {
							id: 2021,
							name: 'Deadlift',
							exerciseGif: 'exerciseGifString',
							explanation: 'explanationString',
							muscleGroups: new Set(['chest']),
							exerciseHistoryId: 1,
							exerciseHistory: {
								exerciseId: 1,
								date: new Date(),
								sets: [
									{
										id: 1,
										exerciseHistoryId: 1,
										setNumber: 1,
										weight: 100,
										reps: 10,
										wrapsUsed: false,
										strapsUsed: false,
										sleevesUsed: true,
										rpe: 8,
										extraNote: 'Felt solid'
									}
								]
							}
						},
						sets: [
							{ setNumber: 1, reps: 12 },
							{ setNumber: 2, reps: 10 },
							{ setNumber: 3, reps: 8 },
							{ setNumber: 4, reps: 6 }
						]
					}
				]
			}
		]
	},
	{
		name: 'Push-Pull-Legs Vol.1',
		days: [
			{
				dayNumber: 1,
				label: 'Push Day',
				exercises: [
					{
						exercise: {
							id: 10,
							name: 'Overhead Press',
							exerciseGif: 'ohpGif',
							explanation: 'Builds shoulder and triceps strength.',
							muscleGroups: new Set(['shoulders', 'triceps']),
							exerciseHistoryId: 10,
							exerciseHistory: {
								exerciseId: 10,
								date: new Date(),
								sets: [
									{ id: 1, exerciseHistoryId: 10, setNumber: 1, weight: 40, reps: 8, wrapsUsed: false, strapsUsed: false, sleevesUsed: false, rpe: 8, extraNote: '' }
								]
							}
						},
						sets: [
							{ setNumber: 1, reps: 8 },
							{ setNumber: 2, reps: 6 },
							{ setNumber: 3, reps: 6 }
						]
					}
				]
			},
			{
				dayNumber: 2,
				label: 'Pull Day',
				exercises: [
					{
						exercise: {
							id: 11,
							name: 'Barbell Row',
							exerciseGif: 'rowGif',
							explanation: 'Compound lift for back thickness.',
							muscleGroups: new Set(['lats', 'rear delts', 'biceps']),
							exerciseHistoryId: 11,
							exerciseHistory: {
								exerciseId: 11,
								date: new Date(),
								sets: [
									{ id: 1, exerciseHistoryId: 11, setNumber: 1, weight: 70, reps: 10, wrapsUsed: false, strapsUsed: true, sleevesUsed: false, rpe: 7, extraNote: 'Grip slipped on 3rd set' }
								]
							}
						},
						sets: [
							{ setNumber: 1, reps: 10 },
							{ setNumber: 2, reps: 8 },
							{ setNumber: 3, reps: 8 }
						]
					}
				]
			},
			{
				dayNumber: 3,
				label: 'Leg Day',
				exercises: [
					{
						exercise: {
							id: 12,
							name: 'Barbell Squat',
							exerciseGif: 'squatGif',
							explanation: 'Full body compound; focus on quads and glutes.',
							muscleGroups: new Set(['quads', 'glutes', 'core']),
							exerciseHistoryId: 12,
							exerciseHistory: {
								exerciseId: 12,
								date: new Date(),
								sets: [
									{ id: 1, exerciseHistoryId: 12, setNumber: 1, weight: 100, reps: 5, wrapsUsed: true, strapsUsed: false, sleevesUsed: true, rpe: 9, extraNote: 'Heavy but clean form' }
								]
							}
						},
						sets: [
							{ setNumber: 1, reps: 5 },
							{ setNumber: 2, reps: 5 },
							{ setNumber: 3, reps: 5 }
						]
					}
				]
			}
		]
	},


	
	
]);


export const CurrentActiveBuiltProgram = writable<ActiveProgramRef>({
	name:'Nsuns1',
	currentDay: 1,
	daysAmount : 2
})