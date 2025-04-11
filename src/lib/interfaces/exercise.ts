import type { ExerciseHistory } from './exerciseHistory';

export interface Exercise {
	id: number;
	name: string;
	exerciseGif?: string;
	explanation?: string;
	muscleGroups: Set<musleGroupTypes>;
	exerciseHistory?: ExerciseHistory;
}

export type musleGroupTypes = 'chest' | 'triceps' | 'back' | 'biceps';
