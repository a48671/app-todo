import {
    ADD_TASK,
    SORT_TASKS,
    REMOVE_TASK,
    CHANGE_TASK,
    GETTING_TASKS
} from './actionTypes';

export function addTask() {
    return({
        type: ADD_TASK
    });
}

export function sortTasks() {
    return({
        type: SORT_TASKS
    });
}

export function removeTask(index) {
    return({
        type: REMOVE_TASK,
        payload: {index}
    });
}

export function changeTask(event, index) {
    return({
        type: CHANGE_TASK,
        payload: {
            event, 
            index
        }
    });
}

export function gettingTasks(tasks) {
    console.log('gettingTasks');
    return({
        type: GETTING_TASKS,
        payload: {
            tasks
        }
    });
}