import type { ExerciseSet } from "./exerciseSet";
export interface PerformedExercise {
    exerciseId: number;
    sets: Array<ExerciseSet>;
}