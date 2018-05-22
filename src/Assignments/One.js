import React from 'react';


const UserInput = (props) => {
  const style = {
    border: '2px solid blue',
  }
  return (
    <input style={style} type="text" onChange={props.changed}/>
  )


}

const UserOutput = (props) => {
  return (
    <div>
    <p>UserName: {props.userName}</p>
    <p>{props.contentTwo}</p>
    </div>
  )
}

export {
  UserInput,
  UserOutput,
};
