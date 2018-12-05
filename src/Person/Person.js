import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props)=>{
    const style={
        '@media (min-width: 500px)':{
            width:'450px',
            backgroundColor:'#eee'
        }
    }
    return (
        <div  className="Person" style={style}>
            <p >I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <button type="button" onClick={props.click}> Deletar</button>
        </div>
    )
}

export default Radium(person);