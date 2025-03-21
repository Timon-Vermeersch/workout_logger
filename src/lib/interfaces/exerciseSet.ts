
export interface ExerciseSet {
    id: number,
    exerciseHistoryId: number,
    setNumber: number,
    weight: number,
    reps: number,
    wrapsUsed: boolean,
    strapsUsed: boolean,
    sleevesUsed: boolean,
    rpe?: number,
    extraNote?: string
}