import type { ExerciseHistory } from './exerciseHistory';

export interface Exercise {
	id: number;
	name: string;
	exerciseGif?: string;
	explanation?: string;
	muscleGroups: Array<musleGroupTypes>;
	exerciseHistory?: ExerciseHistory;
}

export type musleGroupTypes = 'chest' | 'triceps' | 'back' | 'biceps';
