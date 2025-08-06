import type { ExerciseSet } from "./exerciseSet";
export interface ExerciseHistoryEntry {
    performedAt?: string;
    //swap to date: string;
    sets: Array<ExerciseSet>
}