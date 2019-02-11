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

export function changeTask(index, value) {
    return({
        type: CHANGE_TASK,
        payload: {
            index,
            value
        }
    });
}

export function gettingTasks(tasks) {
    return({
        type: GETTING_TASKS,
        payload: {
            tasks
        }
    });
}