//import type { Exercise } from './exercise';
import type { ExerciseSet } from './exerciseSet';

export interface PlannedExercise {
	exerciseId: number;
	sets: Array<ExerciseSet>;
}

	//deletedDate?
	// date: string;
	//changed exercise: Exercise; to exercise: exerciseId;
