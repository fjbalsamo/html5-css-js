const taskList = []

/**
 * this funtion listen the submit form event and save tasks
 */
const init = () => {
    document.getElementById('taskForm').addEventListener('submit', evt => {

        evt.preventDefault()

        var taskName = document.getElementById('taskInput').value

        // alert(taskName+" es una nueva tarea!")

        if (String(taskName).trim().length == 0) return alert('task name is required')

        let newTask = {
            name: taskName,
            done: false,
            date: Date.now()
        }

        

        taskList.push(newTask)

        document.getElementById('taskInput').value = ''

        // console.log(taskList)

        render()


    })
}

/**
 * this funcion print tasks in the table
 */
const render = () => {
    const taskBoby = document.getElementById('taskBoby')
    

   const trArray = taskList.map((value, index) => {

        const tr = `
        <tr>
            <td class="${value.done ? 'task task-done' : 'task'}">${value.name}</td>
            <td>
                <button class="btn btn-success" onClick="toggleDone(${index})">
                    done
                </button>
            </td>
            <td>
                <button class="btn btn-danger" onClick="deleteTask(${index})">
                    del
                </button>
            </td>
            <td>
               <small clsas="text-muted">${parseDateString(value.date)}</small>
            </td>
        </tr>`

        return tr

    })


    taskBoby.innerHTML = trArray.join('')
    

}

/**
 * this functon remove one task within array
 */
const deleteTask = (index) => {
    const check = confirm('Are you sure to detele that??')
    if(check) {
        taskList.splice(index, 1)
        render()
    }
}

const toggleDone = (index) => {
    const task = taskList[index]
    taskList[index].done = !task.done 
    render()
}

const parseDateString = (number) => {
    const date = new Date(number);

    return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`
}

render()

init()