import type { ExerciseHistory } from './exerciseHistory';

export interface Exercise {
	id: number;
	name: string;
	exerciseGif?: string;
	explanation?: string;
	muscleGroups: Set<muscleGroupTypes>;
	exerciseHistory?: ExerciseHistory;
}

export type muscleGroupTypes = 'chest' | 'triceps' | 'back' | 'biceps';
