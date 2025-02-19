import { writable } from 'svelte/store';

export const personalProgram = writable([
    {
        name: "Flat Barbell Bench Press",
        sets: [
            { Previous: '12x432', set: { set: '12', rep: '432' } },
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

export const ExcerciseOptions = writable([
  {
    name: "Barbell Decline Bench",
    sets: [
      { Previous: '', set: { set: '', rep: '' }},
    ],
  }
])
