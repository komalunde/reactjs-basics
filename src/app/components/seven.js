import React from 'react';

class Pop extends React.Component{
render(){
return <button>I <Heart /> React</button>
	
    }
};

const Button=(props) => <button>{props.children}</button>

class Heart extends React.Component{
	render(){
	  return <span>&hearts;</span>
	}
   };
export default Pop;

