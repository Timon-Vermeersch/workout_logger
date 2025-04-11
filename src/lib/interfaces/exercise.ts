import type { PlannedExercise } from './plannedExercise';
import type { ExerciseHistory } from './exerciseHistory';

export interface Exercise {
	id: number;
	name: string;
	exerciseGif: string;
	explanation: string;
	muscleGroups: Array<string>;
	exerciseHistory: ExerciseHistory;
	plannedExercise: PlannedExercise;
}
