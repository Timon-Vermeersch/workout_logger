import type { ExerciseHistory } from './exerciseHistory';

export interface Exercise {
	id: number;
	name: string;
	exerciseGif?: string;
	explanation?: string;
	muscleGroups: Set<muscleGroupTypes>;
	exerciseHistory?: ExerciseHistory;
}

// export type muscleGroupTypes = 'chest' | 'triceps' | 'back' | 'biceps';

export const muscleGroups = ['chest', 'triceps', 'back', 'biceps'] as const

export type muscleGroupTypes = typeof muscleGroups[number]