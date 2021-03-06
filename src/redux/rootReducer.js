import {sortTasks} from '../functions/sortTasks';

const initialState = {
    tasks: [],
        order: true
}

export default function rootReducer(state = initialState, action) {
    
    const {tasks, order} = state;

    const {type, payload} = action;
    
    switch(type) {
        
        case 'ADD_TASK':

            if(tasks && tasks.length) {
              if(tasks[tasks.length - 1].title === '') {
                  return state;
              }
            }

            return ({
                ...state,
                tasks: [
                    ...tasks,
                    {
                        title: '',
                        checked: false
                    }
                ]
            });
        
        case 'SORT_TASKS':

            let cloneTasks = tasks[tasks.length - 1].title === ''
                ? tasks.slice(0, tasks.length - 1)
                : [...tasks];

            const sortedTasks = order ? sortTasks(cloneTasks) : sortTasks(cloneTasks).reverse();

            return ({
                ...state,
                tasks: sortedTasks,
                order: !order
            });
        
        case 'REMOVE_TASK':
            
            const removedTaskInTasks = [...tasks];
            removedTaskInTasks.splice(payload.index, 1)
            
            return ({
                ...state,
                tasks: removedTaskInTasks
            });

        case 'CHANGE_TASK':

            let newTasks = [...tasks];
            newTasks[payload.index].title = payload.value.trim();
            
            return({
                ...state,
                tasks: newTasks 
            });

        case 'SAVE_TASKS':

            localStorage.setItem('tasks', JSON.stringify(state));

            return state;

        case 'GETTING_TASKS':

            return ({...payload.tasks});

        default: 

            return state;

    }
};