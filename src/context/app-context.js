import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [ todoName, setTodoName ] = useState('');
	const [ todoPriority, setTodoPriority ] = useState('');
	const [ todoList, setTodoList ] = useState([]);

	const addTodo = (newTodo) => {
		setTodoList([ ...todoList, { name: newTodo.todoName, priority: newTodo.todoPriority } ]);
        localStorage.setItem('users', JSON.stringify(todoList))
	};

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_,index) => index !== todoIndex);
        setTodoList(newList)
    }

   useEffect(() => {
    const Items = JSON.parse(localStorage.getItem('users'));
   },[])

	const contextValue = {
		todoList,
		addTodo,
		setTodoName,
		setTodoList,
		todoName,
		setTodoPriority,
        removeTodo,
		todoPriority
	};
	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useTodoContext = () => useContext(AppContext);

export default AppProvider;
