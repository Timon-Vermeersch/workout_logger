import type { ExerciseSet } from "./exerciseSet";
export interface ExerciseHistoryEntry {
    performedAt?: string;
    sets: Array<ExerciseSet>
}