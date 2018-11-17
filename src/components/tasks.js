import React from 'react';


 function Tasks (props) {
    //console.log(props);
    //return <h1> Task Name: {props.name} </h1>;
    //return <button onClick={props.selectEvent}>{props.name}</button>
    /*return (
        <div>
            <input type="radio" value="MALE" name="gender" />{props.name}
        </div>
    )*/
    return (
        <div >
        <input type ="radio" name="task"
            value = {props.index}
            checked={false}
            
            onChange ={props.selectEvent} />{props.name}
        </div>
    )
}

export default Tasks;