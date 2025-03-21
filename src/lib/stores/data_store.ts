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
export const excercisesList = writable([
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


// personalProgram[x].name -> to access the exercise name
// personalProgram[x].sets[y].Previous -> to access the previous set (format: 'reps x weight')
// personalProgram[x].sets[y].set.set -> to access the current set reps
// personalProgram[x].sets[y].set.rep -> to access the current set weight
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


// ExcerciseOptions[x].name -> to access the exercise name
// ExcerciseOptions[x].sets[y].Previous -> to access the previous set (format: 'reps x weight')
// ExcerciseOptions[x].sets[y].set.set -> to access the current set reps
// ExcerciseOptions[x].sets[y].set.rep -> to access the current set weight
export const ExcerciseOptions = writable([
  {
    name: "Barbell Decline Bench",
    sets: [
      { Previous: '', set: { set: '', rep: '' }},
    ],
  }
])

// export interface exercise {
//   exercise:string; 
//   sets:Array<number>:
// }
// export interface program {
//   name:string;
//   days:Array<exercise>
// }

// writable<Array<program>>([
  
export const availablePrograms =  writable([
    {
      name: 'Hypertrophy', 
      days: {
        1: [
          // {}
          { exercise: 'Bench Press', sets:{ 'set 1': 8, 'set 2': 8, 'set 3': 8,'set 4': 8, 'set 5': 8 }},
          { exercise: 'Incline Dumbbell Press', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
          { exercise: 'Incline Dumbbell Press', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
        ],
        2: [
          { exercise: 'Squats', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
          { exercise: 'Lunges', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
        ],
        3: [
          { exercise: 'Deadlifts', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
          { exercise: 'Pull-Ups', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
        ]
      }
    },
    {
      name: 'Strenghtofwoz', 
      days: {
        1: [
          { exercise: 'Squats', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
          { exercise: 'Lunges', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
        ],
        Wednesday: [
          { exercise: 'Squats', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
          { exercise: 'Lunges', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
        ],
        Friday: [
          { exercise: 'Deadlifts', sets: 5, reps: 5 },
          { exercise: 'Pull-Ups', sets: 4, reps: 10 }
        ],
        soemday: [
          { exercise: 'Deadlifts', sets: 5, reps: 5 },
          { exercise: 'Pull-Ups', sets: 4, reps: 10 }
        ],
        noday: [
          { exercise: 'Deadlifts', sets: 5, reps: 5 },
          { exercise: 'Pull-Ups', sets: 4, reps: 10 }
        ]
      }
    }
  ]);