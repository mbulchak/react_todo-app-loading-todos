import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList';
import { Todo } from './types/Todo';
import { Footer } from './components/Footer';
import { getTodos } from './api/todos';
import { ErrorNotification } from './components/ErrorNotification';
import { Errors } from './types/Errors';
import { Filter } from './types/Filters';
import { getFilteredTodosByStatus } from './utils/getFilteredTodosByStatus';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState(Filter.All);

  const [errorMessage, setErrorMessage] = useState('');

  const filteredTodos = getFilteredTodosByStatus(todos, filter);

  const resetError = () => setErrorMessage(Errors.DEFAULT);

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => setErrorMessage(Errors.LOADING));
  }, []);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(resetError, 3000);
    }
  }, [errorMessage]);

  const countActiveTodos = todos.reduce((accum, todo) => {
    let countTodos = 0;

    if (!todo.completed) {
      countTodos += 1;
    }

    return accum + countTodos;
  }, 0);

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header todos={todos} />

        {todos.length > 0 && (
          <>
            <TodoList todos={filteredTodos} />

            <Footer
              countActiveTodos={countActiveTodos}
              filter={filter}
              setFilter={setFilter}
            />
          </>
        )}
      </div>

      <ErrorNotification
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};
