import type { ExerciseSet } from "./exerciseSet";
export interface ExerciseHistoryEntry {
    date: string;
    sets: Array<ExerciseSet>
}