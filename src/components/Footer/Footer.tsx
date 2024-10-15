import { Filter } from '../../types/Filters';
import cn from 'classnames';

type Props = {
  countActiveTodos: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export const Footer: React.FC<Props> = ({
  countActiveTodos,
  filter,
  setFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${countActiveTodos} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: filter === Filter.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter(Filter.All)}
        >
          {Filter.All}
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: filter === Filter.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter(Filter.Active)}
        >
          {Filter.Active}
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: filter === Filter.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter(Filter.Completed)}
        >
          {Filter.Completed}
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
