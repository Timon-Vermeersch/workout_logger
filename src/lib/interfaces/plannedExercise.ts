import type { Exercise } from './exercise';
import type { ExerciseSet } from './exerciseSet';

export interface PlannedExercise {
	exercise: Exercise;
	date: string;
	sets: Array<ExerciseSet>;
}
