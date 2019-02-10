export const sortTasks = tasks => {
    let arrayTitles = [];
    tasks.forEach(task => {
        const currentTitle = task.title;
        if(currentTitle !== '') {
            arrayTitles.push(currentTitle.toLowerCase());
        }
    });
    arrayTitles.sort();

    let sortedTasks = [];
    arrayTitles.forEach(title => {
        tasks.forEach((task, i) => {
            const lowCaseTitle = task.title.toLowerCase();
            if(lowCaseTitle === title) {
                sortedTasks.push(task);
                tasks.splice(i, 1);
            }
        });
    });

    return sortedTasks;
}
