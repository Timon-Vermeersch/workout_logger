import type { ExerciseHistory } from "./exerciseHistory";

export interface Exercise {
    id:number,
    name:string,
    exerciseGif:string,
    explanation:string,
    muscleGroups:Array<string>,
    exerciseHistoryId:number,
    exerciseHistory:ExerciseHistory
}