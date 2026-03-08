import type { ExerciseSet } from "./exerciseSet";
import type { PerformedExercise } from "./performedExercise";
// DayHistory = performed workout log
export interface DayHistory {
    dayNumber: number;
    date: string;
    exercises: Array<PerformedExercise>;
};


