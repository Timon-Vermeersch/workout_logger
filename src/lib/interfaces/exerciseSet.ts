export interface ExerciseSet {
	setNumber: number; // which set your on , 1-2 etc
	weight: number; //432
	reps: number; //12
	wrapsUsed?: boolean;
	strapsUsed?: boolean;
	sleevesUsed?: boolean;
	rpe?: number;
	extraNote?: string;
	previous?: string;
}
