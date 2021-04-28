import React, { useState } from 'react';

const Body = () => {

    const [value, setValue] = useState({
        name: "",

    })
   
    const [flag, setFlag] = useState(false)
    const [todoList, setTodoList] = useState([]);



    const handleChange = (e) => {
        setValue({
            ...value, 
            [e.target.name]: e.target.value

        })
       

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
   
    const removeItem = (item) => {
        //const arr = todoList.filter((item) => item.name !== i);
       const arr1= todoList;
      // console.log("i value"+i);
       arr1.splice(item, 1);
        
        setTodoList([...arr1]);
        console.log(arr1);
    };
    
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
                                <li key={i}>{item} <button onClick={() => removeItem(i) }>Delete</button></li>
                            )
                       // }
                    })
                }
            </ul>

        </>


    );
};

export default Body;