import type { Exercise } from './exercise';
import type {ExerciseHistoryEntry} from './exerciseHistoryEntry';

export interface ExerciseHistory {
    exercise: Exercise
    //swap to exerciseId: number;
    historyArray: Array<ExerciseHistoryEntry>
}