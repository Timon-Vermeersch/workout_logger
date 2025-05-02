import type { builtProgram } from '$lib/interfaces/builtProgram';
import type { GlobalExerciselist } from '$lib/interfaces/global-exercise-list';
import type { ProgramDay } from '$lib/interfaces/programDay';
import type { Equipment, muscleGroupTypes } from '../interfaces/exercise';



import { writable } from 'svelte/store';

export const exerciseHistory = writable([
	{
		name: 'Squat',
		history: [
			{ dateTime: [{ 12: 20 }, { 8: 20 }, { 6: 20 }, { 4: 20 }] },
			{ dateTime: [{ 12: 20 }, { 12: 20 }, { 8: 20 }, { 4: 20 }] }
		]
	}
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
	exercises: [
		{
			exercise: {
				id: 1,
				name: 'Flat Barbell Bench Press',
				exerciseGif: '',
				explanation: 'just bench press bro',
				muscleGroups: new Set(['chest'])
			},
			date: '1/04/2025',
			sets: [
				{ setNumber: 1, previous: '12x53', weight: 12, reps: 54 },
				{ setNumber: 2, previous: '11x11', weight: 8, reps: 33 },
				{ setNumber: 3, previous: '15x15', weight: 6, reps: 99999 }
			]
		},
		{
			exercise: {
				id: 2,
				name: 'Cable Chest Fly ',
				exerciseGif: '',
				explanation: 'just bech press bro',
				muscleGroups: new Set(['chest'])
			},
			date: '1/04/2025',
			sets: [
				{ setNumber: 1, previous: '12x53', weight: 12, reps: 54 },
				{ setNumber: 2, previous: '11x11', weight: 8, reps: 33 },
				{ setNumber: 3, previous: '15x15', weight: 6, reps: 99999 }
			]
		},
		{
			exercise: {
				id: 3,
				name: 'Incline Barbell Bench Press',
				exerciseGif: '',
				explanation: 'just bench press bro',
				muscleGroups: new Set(['chest'])
			},
			date: '1/04/2025',
			sets: [
				{ setNumber: 1, previous: '12x53', weight: 12, reps: 54 },
				{ setNumber: 2, previous: '11x11', weight: 8, reps: 33 },
				{ setNumber: 3, previous: '15x15', weight: 6, reps: 99999 }
			]
		},
		{
			exercise: {
				id: 4,
				name: 'Triceps Rope Pushdowns',
				exerciseGif: '',
				explanation: 'just bech press bro',
				muscleGroups: new Set(['chest'])
			},
			date: '1/04/2025',
			sets: [
				{ setNumber: 1, previous: '12x53', weight: 12, reps: 54 },
				{ setNumber: 2, previous: '11x11', weight: 8, reps: 33 },
				{ setNumber: 3, previous: '15x15', weight: 6, reps: 99999 }
			]
		},
		{
			exercise: {
				id: 5,
				name: 'Triceps Rope Pushdowns',
				exerciseGif: '',
				explanation: 'just bech press bro',
				muscleGroups: new Set(['chest'])
			},
			date: '1/04/2025',
			sets: [
				{ setNumber: 1, previous: '12x53', weight: 12, reps: 54 },
				{ setNumber: 2, previous: '11x11', weight: 8, reps: 33 },
				{ setNumber: 3, previous: '15x15', weight: 6, reps: 99999 }
			]
		}
	]
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
							{ setNumber: 1, reps: 12 },
							{ setNumber: 2, reps: 10 },
							{ setNumber: 3, reps: 8 },
							{ setNumber: 4, reps: 6 }
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
	}
]);
