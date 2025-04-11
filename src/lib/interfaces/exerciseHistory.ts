import type { ExerciseSet } from './exerciseSet';

export interface ExerciseHistory {
	date: Date;
	sets: Array<ExerciseSet>;
}
