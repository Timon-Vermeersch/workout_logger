import type { ExerciseHistory } from './exerciseHistory';

export interface Exercise {
	id: number;
	name: string;
	exerciseGif?: string;
	explanation?: string;
	muscleGroups: Set<muscleGroupTypes>;
	equipmentUsed?: Set<EquipmentTypes>;
	
}

// export type muscleGroupTypes = 'chest' | 'triceps' | 'back' | 'biceps';

export const muscleGroups = ['chest', 'triceps', 'back', 'biceps', 'front delts', 'lats'] as const
export const equipment = [
	// Free weights
	'dumbbells', 'barbell', 'kettlebell', 'ez curl bar', 'trap bar',

	// Machines
	'machine', 'cable machine', 'smith machine',

	// Bodyweight + accessories
	'bodyweight', 'resistance band', 'pull-up bar', 'bench', 'swiss ball', 'medicine ball'
] as const;

export type muscleGroupTypes = typeof muscleGroups[number]
export type EquipmentTypes = typeof equipment[number];