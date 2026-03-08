import {get} from 'svelte/store';
import { Exerciseslist } from '$lib/stores/data_store';

export function lookupExerciseById(id?: number) {
    const list = get(Exerciseslist);

    if(id === undefined){
        return list.exercises
    }

    return list.exercises.find(exercise => exercise.id === id);
}


