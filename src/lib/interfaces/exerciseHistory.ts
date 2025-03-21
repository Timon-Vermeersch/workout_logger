import type { ExerciseSet } from "./exerciseSet";


export interface ExerciseHistory {
    exerciseId: number,
    date: Date,
    sets: Array<ExerciseSet>
}