import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [ todoName, setTodoName ] = useState('');
	const [ todoPriority, setTodoPriority ] = useState('');
	const [ todoList, setTodoList ] = useState([]);

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, { name: newTodo.todoName, priority: newTodo.todoPriority } ]);
		localStorage.setItem('users', JSON.stringify(todoList));
	};

	const removeTodo = (todoIndex) => {
		const newList = todoList.filter((_, index) => index !== todoIndex);
        localStorage.setItem('users', JSON.stringify(newList));
		setTodoList(newList);
	};

    const handleEditTodos = (obj,index) => {
        let tempList = todoList
        tempList[index] = obj
        localStorage.setItem("users", JSON.stringify(tempList))
        setTodoList(tempList)
        window.location.reload()
    }

 

	const contextValue = {
		todoList,
		addTodo,
		setTodoName,
		setTodoList,
		todoName,
		setTodoPriority,
		removeTodo,
        handleEditTodos,
		todoPriority
	};
	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useTodoContext = () => useContext(AppContext);

export default AppProvider;
