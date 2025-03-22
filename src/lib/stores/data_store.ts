import type { BuiltPrograms } from '$lib/interfaces/builtPrograms';
import { writable } from 'svelte/store';
// exercisesList[x].name -> to access the exercise name
// exercisesList[x].sets[y].Previous -> to access the previous value
// exercisesList[x].sets[y].set.set -> to access the set value
// exercisesList[x].sets[y].set.rep -> to access the rep value

// exerciseHistory[0].name = Squat
// exerciseHistory[0].name.history[1]

export const exerciseHistory = writable(
    [
        {name: 'Squat',
          history:[
            {dateTime:[{12 : 20}, {8 : 20}, {6 : 20}, {4 : 20}]},
            {dateTime:[{12 : 20}, {12 : 20}, {8 : 20}, {4 : 20}]},
            
        ]                     
        },
    ]
)
export const Exerciseslist = writable([
    {
        name: "Squat",
        sets: [
            { Previous: '', set: { set: '', rep: '' } },
        ]
    },
    {
        name: "Leg Press1 ",
        sets: [
            { Previous: '', set: { set: '', rep: '' } },
        ]
    },    
])


export const personalProgram = writable([
    {
        name: "Flat Barbell Bench Press",
        sets: [
            { Previous: '12x432', set: [1,2,3,4]},
            { Previous: '12x53', set: { set: '12', rep: '54' } },
            { Previous: '11x11', set: { set: '11', rep: '11' } },
            { Previous: '11x2', set: { set: '11', rep: '2' } },
            
        ]
    },
    {
        name: "Incline Barbell Bench Press",
        sets: [
            { Previous: '12x32', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            
        ]
    },
    {
        name: "Cable Chest Fly ",
        sets: [
            { Previous: '12x32', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            
        ]
    },
    {
        name: "Close-Grip Barbell Bench Press",
        sets: [
            { Previous: '12x32', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            
        ]
    },
    {
        name: "Triceps Rope Pushdowns",
        sets: [
            { Previous: '12x32', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            
        ]
    },
    {
        name: "Overhead Triceps Extensions",
        sets: [
            { Previous: '12x32', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            { Previous: '10x10', set: { set: '', rep: '' } },
            
        ]
    }
]);




//fixed builtPrograms
export const builtPrograms =  writable<Array<BuiltPrograms>>([
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