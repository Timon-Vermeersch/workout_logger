import type { PlannedExercise } from './plannedExercise';

export interface ProgramDay {
	dayNumber: number; // you do not have to have 7 days (week) you can put 10 days in a week if you want
	exercises: Array<PlannedExercise>;
}
