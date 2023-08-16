import React from 'react'

const AddTask = ({tasklist, setTasklist, task, setTask}) => {
    
    const submitHandler=(event)=>{
        event.preventDefault();

        if(task.id){
            const date = new Date();
            const updateTasklist = tasklist.map((todo)=> (
                todo.id === task.id ? {id:task.id, name: task.name, time:`${date.toLocaleTimeString()} ${date.toDateString()}` } : todo
            ));
            setTasklist(updateTasklist)
        }else{
            const date = new Date();
        
            const newTask = {
                id: date.getTime(), 
                name:event.target.task.value, 
                time:`${date.toLocaleTimeString()} ${date.toDateString()}`
            }
            setTasklist([...tasklist, newTask])
            event.target.task.value = "";
        }

      
    }

  return (
    <section className="addTask">
        <form onSubmit={submitHandler}>
            <input 
                type='text' 
                name='task' 
                value={task.name} 
                autoComplete ='off' 
                placeholder='Add Task' 
                maxLength="25" 
                onChange={event => setTask({...task, name: event.target.value})}/>
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}

export default AddTask
