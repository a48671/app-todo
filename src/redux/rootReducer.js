import {sortTasks} from '../functions/sortTasks';

const initialState = {
    tasks: [],
    order: true
}

export default function rootReducer(state = initialState, action) {
    
    const {tasks, order} = state;

    switch(action.type) {

        case 'ADD_TASK':

            if(tasks.length) {
              if(tasks[tasks.length - 1].title === '') {
                  return state;
              }
            }

            const addTaskState = Object.assign({}, state);
            addTaskState.tasks = [
                ...tasks,
                {
                    title: '',
                    checked: false
                }
            ];

            return addTaskState;
        
        case 'SORT_TASKS':

            const sortedTasks = order ? sortTasks(tasks) : sortTasks(tasks).reverse();

            const sortedTasksState = Object.assign({}, state);
            sortedTasksState.tasks = sortedTasks;

            return sortedTasksState;
        
        case 'REMOVE_TASK':

            const {index} = action; 

            
            const removedTaskInTasks = [...tasks];
            removedTaskInTasks.splice(index, 1)
            
            const removeTaskState = Object.assign({}, state);
            removeTaskState.tasks = removedTaskInTasks;

            return removeTaskState;

        default: 

            return state;

    }
};