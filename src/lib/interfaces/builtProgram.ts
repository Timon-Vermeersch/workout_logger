import type { ProgramDay } from './programDay';
/**
 * builtProgram is a workoutplan contains object existing an array of programDays and its name
 */
export interface builtProgram {
	name: string;
	days: Array<ProgramDay>;
}
