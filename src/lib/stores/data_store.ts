import type { BuiltPrograms } from '$lib/interfaces/builtPrograms';
import type { ProgramDay } from '$lib/interfaces/programDay';
import { writable } from 'svelte/store';
// exercisesList[x].name -> to access the exercise name
// exercisesList[x].sets[y].Previous -> to access the previous value
// exercisesList[x].sets[y].set.set -> to access the set value
// exercisesList[x].sets[y].set.rep -> to access the rep value

// exerciseHistory[0].name = Squat
// exerciseHistory[0].name.history[1]

export const exerciseHistory = writable([
	{
		name: 'Squat',
		history: [
			{ dateTime: [{ 12: 20 }, { 8: 20 }, { 6: 20 }, { 4: 20 }] },
			{ dateTime: [{ 12: 20 }, { 12: 20 }, { 8: 20 }, { 4: 20 }] }
		]
	}
]);
/**
 * TODO:Timon do this pls
 * change ths to the GlobalExcerciseList interface and fix the +page.svelte of routes/session
 */
export const Exerciseslist = writable([
	{
		name: 'Squat',
		sets: [{ Previous: '', set: { set: '', rep: '' } }]
	},
	{
		name: 'Leg Press1 ',
		sets: [{ Previous: '', set: { set: '', rep: '' } }]
	}
]);

export const personalProgram = writable<ProgramDay>({
	dayNumber: 1,
	exercises: [
		{
			exercise: {
				id: 1,
				name: 'Flat Barbell Bench Press',
				exerciseGif: '',
				explanation: 'just bech press bro',
				muscleGroups: ['chest']
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
				muscleGroups: ['chest']
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
				explanation: 'just bech press bro',
				muscleGroups: ['chest']
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
				muscleGroups: ['chest']
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
				muscleGroups: ['chest']
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
export const builtPrograms = writable<Array<BuiltPrograms>>([
	{
		name: 'Fre-Dag',
		days: [
			{
				dayNumber: 1,
				exercises: [
					{
						exercise: {
							id: 1,
							name: 'ok',
							exerciseGif: 'exerciseGifString',
							explanation: 'explanationString',
							muscleGroups: ['chest', 'etc'],
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
										extraNote: 'Note'
									}
								]
							}
						},
						sets: []
					}
				]
			}
		]
	},
	{
		name: 'Timon-Dag',
		days: [
			{
				dayNumber: 1,
				exercises: [
					{
						exercise: {
							id: 1,
							name: 'ok',
							exerciseGif: 'exerciseGifString',
							explanation: 'explanationString',
							muscleGroups: ['chest', 'etc'],
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
						sets: []
					}
				]
			}
		]
	}
]);
