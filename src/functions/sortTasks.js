export const sortTasks = tasks => {

    const sortedTasks = [...tasks];

    const compareFunction = (a, b) => {
        if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        else return 1;
    }

    sortedTasks.sort(compareFunction);

    return sortedTasks;
}
