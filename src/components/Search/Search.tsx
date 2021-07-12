import React, {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useRef,
  useState,
} from 'react';
import './Search.scss';
import KeyboardWrapper from './KeyboardWrapper';

import searchIcon from '../../assets/images/search/search-icon.svg';
import keyboardIcon from '../../assets/images/search/keyboard.svg';
import { useDispatch } from 'react-redux';
import { QueryActionTypes } from 'src/types/query';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

interface Props {}

const Search: React.FC<Props> = () => {
  const [isKeyboardActive, setKeyboardActive] = useState(false);
  const keyboard = useRef() as MutableRefObject<any>;
  const dispatch = useDispatch();
  const valueOfInput = useTypedSelector((state) => state.query.value);

  const toggleKeyboard = () => {
    setKeyboardActive(!isKeyboardActive);
    if (isKeyboardActive) {
      keyboard.current?.destroy();
    }
  };

  const setInput = (value: string) => {
    dispatch({ type: QueryActionTypes.CHANGE_QUERY, payload: value });
    console.log(`DISPATCH ${value}`);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);

    keyboard.current?.setInput(input);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submit');
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <button className="search__button" type="submit">
        <svg className="search__icon">
          <use xlinkHref={`${searchIcon}#Capa_3`} />
        </svg>
      </button>

      <input
        className="search__input"
        type="text"
        placeholder="Write query"
        value={valueOfInput}
        onChange={onChangeInput}
      />

      <button
        className="keyboard__button "
        type="button"
        onClick={toggleKeyboard}
      >
        <svg className="keyboard__icon">
          <use xlinkHref={`${keyboardIcon}#Capa_3`} />
        </svg>
      </button>
      {isKeyboardActive && (
        <div className="keyboard-container">
          <KeyboardWrapper
            keyboardRef={keyboard}
            onChange={setInput}
            defaultValue={valueOfInput}
          />
        </div>
      )}
    </form>
  );
};

export default Search;
