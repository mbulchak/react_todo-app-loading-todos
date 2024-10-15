import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { Errors } from '../../types/Errors';

type Props = {
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  setErrorMessage,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !errorMessage,
      })}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => setErrorMessage(Errors.DEFAULT)}
      />
      {errorMessage}
    </div>
  );
};
