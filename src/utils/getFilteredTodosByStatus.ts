import { Filter } from '../types/Filters';
import { Todo } from '../types/Todo';

export const getFilteredTodosByStatus = (todos: Todo[], filter: Filter) => {
  let preparedTodos = [...todos];

  switch (filter) {
    case Filter.Active:
      return (preparedTodos = preparedTodos.filter(todo => !todo.completed));
    case Filter.Completed:
      return (preparedTodos = preparedTodos.filter(todo => todo.completed));
    default:
      return preparedTodos;
  }
};
