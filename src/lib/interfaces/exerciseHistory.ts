import type { Exercise } from './exercise';
import type {ExerciseHistoryEntry} from './exerciseHistoryEntry';

export interface ExerciseHistory {
    exerciseId: number
    historyArray: Array<ExerciseHistoryEntry>
}