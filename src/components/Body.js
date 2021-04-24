import React, { useState } from 'react';

const Body = () => {

    const [value, setValue] = useState({
        name: "",

    })
   
    const [flag, setFlag] = useState(false)
    const [todoList, setTodoList] = useState([]);



    const handleChange = (e) => {
        setValue({
            ...value, // age:"27",name:"JUI" next task to do list,
            [e.target.name]: e.target.value

        })
        //setTodoList({
        //  ...value, // age:"27",name:"JUI" next task to do list,
        // [e.target.name]: e.target.value
        //})

        setFlag(false);
    }
   // const [task, setTask] = useState();
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(value);
        setFlag(true);
       // setTask(value.name);
        setTodoList((todoList) => [
            ...todoList,value.name,
            
          ]); 
          console.log(todoList);

    }
   
    
    //  setTodoList(value);
    return (
        <>
            <form onSubmit={handleClick}>
                <input placeholder="Task Name" value={value.name} onChange={handleChange} name="name" />
                
                <button>Submit</button>
            </form>
            {flag ? <div>
             {value.name}
                

            </div> : null}
            
            <h2>Task List</h2>
            <ul>
                {
                    todoList.map((item, i) => {
                       // if (i !== 0) {
                            return (
                                <li key={i}>{item}</li>
                            )
                       // }
                    })
                }
            </ul>

        </>


    );
};

export default Body;