import type { ExerciseSet } from "./exerciseSet";

export interface DayHistory {
    dayNumber: number;
    date: string;
    exercises:{
        exerciseId: number;
        sets: ExerciseSet[];
    }[]
};


