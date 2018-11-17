import React, { Component } from 'react';
import './App.css';
import Tasks from './components/tasks.js';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: 'Task Manager',
      taskDescription: null,
      counter: 0,
      input: []
    };
  }

  handleChange (e) {
    this.setState ({taskDescription: e.target.value});
    //this.setState ({input: e.target.value});
    //this.setState ({input: [...this.state.input,e.target.value]});
  }

  handleClick () {
      //console.log(e);
      var counter = this.state.input.length+1;//this.state.counter; //
      this.setState ({
        input: [...this.state.input, this.state.taskDescription],
        counter: counter
        });
      //console.log(this.state.input);
  }
  
  taskSelect(e){
      console.log(e.target.value);
      //Create array copy
      const tasks = Object.assign([],this.state.input);
      //Remove 1 element at that index
      tasks.splice(e.target.value,1); 
      var counter = this.state.input.length-1;//this.state.counter; //
      this.setState ({
        input: tasks,
        counter: counter
        });
    }

  render() {
    //console.log(this.state.input.count);
    if (this.state.input.length>0){
      return (
        <div className="App">
            <p>
              Start writting task name in the textbox and click add Task!
            </p>
            <input type="text" placeholder = "Enter a task description"  onChange={this.handleChange.bind(this)} />
            <button  value ={this.state.tempTxt} onClick ={this.handleClick.bind(this)}>Add Task</button>
            <br />
          
            <div className="Tasks">
              {
                this.state.input.map((ltasks, index) => 
                {
                  return (<Tasks selectEvent={this.taskSelect.bind(this)} name={ltasks} index={index} key={index} />)
                  //return (<div >{ltasks} {index}</div>)
                }
                )
              }
            </div>
        </div>
      );
      }
    else{
      return (
        <div className="App">
          
          <p>
            Start writting task name in the textbox and click add Task!
          </p>
          <input type="text" placeholder = "Enter a task description"  onChange={this.handleChange.bind(this)} />
          <button  value ={this.state.tempTxt} onClick ={this.handleClick.bind(this)}>Add Task</button>
          <br />
         
        </div>
      );
    }
  }
}

export default App;
