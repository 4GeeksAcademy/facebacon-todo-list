import React, { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks
  const [inputValue, setInputValue] = useState(''); // State to manage the input value
  
  // Function to handle adding a new task
  const addTask = () => {
    if (inputValue.trim()) { // Trims white spaces on input values
      setTasks([...tasks, inputValue]); //Adds tasts to the task array
      setInputValue(''); // Clear input after adding the task
    }
  };

  //Function to handle input change
  //On the event 
  //Write the input on the input box
  const handleInputChange = (e) => { 
    setInputValue(e.target.value); 
  };

  // Function to handle key press (Enter key)
  // On the event
  // Pressing Enter
  // Run addTask Function
  const handleKeyPress = (e) => { 
    if (e.key === 'Enter') { 
      addTask(); 
    }
  };

  // Function to delete a task
	const deleteTask = (index) => { // position of the task 
		const newTasks = [...tasks]; // Create a new array
		newTasks.splice(index, 1); // delete one item from the position of the array
		setTasks(newTasks); // pdates the set task with the new array
	};

  return (
    <div className="todo-container">
      <h1>todo</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputChange} // When someone types sends to the handleInputChange function
          onKeyDown={handleKeyPress} // When someone presses a key send to handleKeyPress Function
        />
	  </div> 
      <ul className="task-list">
        {tasks.length === 0 ? ( // Ternary if statement when task.lenght is 0 than display the below text
          <li>No tasks, add a task</li>
        ) : ( // else display the task before the index
          tasks.map((task, index) => ( // keep track of order of the tasks
            <li key={index} className="task-item"> 
              {task} 
              <button
                className="delete-button"
                onClick={() => deleteTask(index)} // display delete button each of the tasks 
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
	  <div className="task-count">
        {tasks.length} {tasks.length === 1 ? 'item' : 'items'} left 
      </div> 
    </div>
  );
}; 

export default Home;