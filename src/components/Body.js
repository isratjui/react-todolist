import React, { useState } from 'react';

const Body = () => {

    const [value, setValue] = useState({
        name: "",
        details: "",
        
    })
    const [flag,setFlag]= useState(false)

    const handleChange = (e) => {
        setValue({
            ...value, // age:"27",name:"JUI" next task to do list,
            [e.target.name]: e.target.value
            
        })
        setFlag(false);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(value);
        setFlag(true);
        
    }
    return (
        <>
        <form onSubmit={handleClick}>
            <input placeholder="Task Name" value={value.name} onChange={handleChange} name="name" />
            <input placeholder="Details" value={value.age} onChange={handleChange} name="details" />
            <button>Submit</button>
        </form>
{flag ? <div>
         {value.name} 
         {value.details}  
         
        </div>: null}
        
        </>
    

    );
};

export default Body;