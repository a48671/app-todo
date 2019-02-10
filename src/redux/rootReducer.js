import {sortTasks} from '../functions/sortTasks';

const initialState = {
    tasks: [],
    order: true
}

export default function rootReducer(state = initialState, action) {
    
    const {tasks, order} = state;

    const {type, index, event} = action;
    
    switch(type) {
        
        case 'ADD_TASK':

            if(tasks.length) {
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

            const sortedTasks = order ? sortTasks(tasks) : sortTasks(tasks).reverse();

            return ({
                ...state,
                tasks: sortedTasks,
                order: !order
            });
        
        case 'REMOVE_TASK':
            
            const removedTaskInTasks = [...tasks];
            removedTaskInTasks.splice(index, 1)
            
            return ({
                ...state,
                tasks: removedTaskInTasks
            });

        case 'CHANGE_TASK':

            let currentValue = event.target.value;
            let newTasks = [...tasks];
            newTasks[index].title = currentValue;
            
            return({
                ...state,
                tasks: newTasks 
            });

        case 'GETTING_TASKS':

            const savedTasks = JSON.parse(localStorage.getItem('tasks'));
            if(savedTasks) {
                return({
                    ...savedTasks
                });
            }

            return({
                ...state
            });

        case 'SAVE_TASKS':

            localStorage.setItem('tasks', JSON.stringify(state));

            return state;

        default: 

            return state;

    }
};