import React, { useState } from 'react';
import styles from './todo.module.css';
import icon from '../../assets/Group 15510.svg';
import pencil from '../../assets/Vector.svg';

function TodoList() {
  const [lists, setLists] = useState([]);
  const [currentListName, setCurrentListName] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleListNameChange = (event) => {
    setCurrentListName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setCurrentTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCurrentDescription(event.target.value);
  };

  const handleListCreate = () => {
    if (currentListName.trim() !== '') {
      const newList = {
        name: currentListName.trim(),
        todos: [],
      };
      setLists([...lists, newList]);
      setCurrentListName('');
    }
  };

  const handleTodoCreate = (listIndex) => {
    if (currentTitle.trim() !== '') {
      const newTodo = {
        title: currentTitle.trim(),
        description: currentDescription.trim(),
      };
      const updatedLists = [...lists];
      updatedLists[listIndex].todos.push(newTodo);
      setLists(updatedLists);
      setCurrentTitle('');
      setCurrentDescription('');
    }
  };

  const handleEditTodo = (listIndex, todoIndex) => {
    const selectedTodo = lists[listIndex].todos[todoIndex];
    setSelectedTodo({
      listIndex,
      todoIndex,
      title: selectedTodo.title,
      description: selectedTodo.description,
    });
    setEditMode(true);
  };

  const handleUpdateTodo = () => {
    if (selectedTodo && selectedTodo.title.trim() !== '') {
      const updatedLists = [...lists];
      updatedLists[selectedTodo.listIndex].todos[selectedTodo.todoIndex] = {
        title: selectedTodo.title.trim(),
        description: selectedTodo.description.trim(),
      };
      setLists(updatedLists);
      setSelectedTodo(null);
      setEditMode(false);
    }
  };

  const handleCloseDrawer = () => {
    setSelectedTodo(null);
    setEditMode(false);
  };

  return (
    <div className={styles.outerBox}>

      <div>
        <input
          type="text"
          placeholder="Add Todo-List"
          value={currentListName}
          onChange={handleListNameChange}
          className={styles.mainInput}
        />
        <button className={styles.mainButton} onClick={handleListCreate}>+</button>
      </div>

      {lists.map((list, listIndex) => (
        <div key={listIndex}>
          <h3 className={styles.listname}>List : {list.name}</h3>

          <div className={styles.todobox}>
            <div className={styles.top}>
              <img src={icon} alt="icon" style={{marginLeft:'2px'}}/>
              <input
              type="text"
              placeholder="Add Todo"
              value={currentTitle}
              onChange={handleTitleChange}
              className={styles.todoinput}
            />

            <button className={styles.mainButton2} onClick={() => handleTodoCreate(listIndex)}>+</button>
            </div>
            <input
              type='text'
              className={styles.tododesc}
              placeholder="Add Todo description"
              value={currentDescription}
              onChange={handleDescriptionChange}
            />
          </div>

          <ul>
            {list.todos.map((todo, todoIndex) => (
              <li key={todoIndex}>
                <div className={styles.outer}>

                  <div className={styles.inner}>

                    <div>
                      <img src={icon} alt="icon" style={{margin:'0.5rem 0'}}/>
                  <h4>{todo.title}</h4>
                   </div>
    
                  <button style={{border:'none' , borderRadius:'20px',backgroundColor: '#353945', padding:'5px' , display:'flex', alignItems:'center', cursor:'pointer'}} onClick={() => handleEditTodo(listIndex, todoIndex)}> <img src={pencil} alt="pencil" /> </button>
                   
                    
                  </div>
                  <p>{todo.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {editMode && selectedTodo && (
        <div className={styles.drawer}>
          <input
            type="text"
            placeholder="Enter title"
            value={selectedTodo.title}
            onChange={(event) =>
              setSelectedTodo({ ...selectedTodo, title: event.target.value })
            }
          />
          <input
            type='text'
            placeholder="Enter description"
            value={selectedTodo.description}
            onChange={(event) =>
              setSelectedTodo({ ...selectedTodo, description: event.target.value })
            }
          />
          <button onClick={handleUpdateTodo}>Update</button>
          <button onClick={handleCloseDrawer}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
