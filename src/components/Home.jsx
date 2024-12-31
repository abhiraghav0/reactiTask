import React, { useState } from 'react'
import Task from './Task'


const Home = () => {

    const [tasks, setTasks] = useState([]);     
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, { title, description}]);

    };

    const deleteTask =(index)=>{
        const filteredArr = tasks.filter((val ,i) => {
            return i!= index;
        });
        console.log(filteredArr);
        setTasks(filteredArr)

    };

    return (
        <div className="container">
            <h1>Your Task</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <button type='submit'>Add Task</button>

            </form>
            {tasks.map((item, index) => (
                <Task key={index} title={item.title} description={item.description}
                deleteTask={deleteTask} index={index} />
            ))}
        </div>
    )
}

export default Home;
