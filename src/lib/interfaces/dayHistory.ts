import type { ExerciseSet } from "./exerciseSet";

interface DayHistory {
    DayNumber: number;
    date: string;
    exercises:{
        exerciseId: number;
        sets: ExerciseSet[]
    }
}[];


