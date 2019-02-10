import {
    SAVE_TASKS,
    GETTING_TASKS,
    ADD_TASK,
    SORT_TASKS,
    REMOVE_TASK,
    CHANGE_TASK
} from './actionTypes';

export function saveTasks() {
    return({
        type: SAVE_TASKS
    });
}

export function gettingTasks() {
    return({
        type: GETTING_TASKS
    });
}

export function addTask() {
    return({
        type: ADD_TASK
    });
}

export function sortTasks(order) {
    return({
        type: SORT_TASKS,
        order
    });
}

export function removeTask(index) {
    return({
        type: REMOVE_TASK,
        index
    });
}

export function changeTask(event, index) {
    return({
        type: CHANGE_TASK,
        event, 
        index
    });
}