import React, { ChangeEvent, MutableRefObject, useRef, useState } from 'react';
import './Search.scss';
import KeyboardWrapper from './KeyboardWrapper';

import searchIcon from '../../assets/images/search/search-icon.svg';
import keyboardIcon from '../../assets/images/search/keyboard.svg';

interface Props {}

const Search: React.FC<Props> = () => {
  const [isKeyboardActive, setKeyboardActive] = useState(true);
  const [input, setInput] = useState('');
  const keyboard = useRef() as MutableRefObject<any>;

  const toggleKeyboard = () => {
    setKeyboardActive(!isKeyboardActive);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <form className="search">
      <button className="search__button" type="submit">
        <svg className="search__icon">
          <use xlinkHref={`${searchIcon}#Capa_3`} />
        </svg>
      </button>

      <input
        className="search__input"
        type="text"
        placeholder="Write query"
        value={input}
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
          <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
        </div>
      )}
    </form>
  );
};

export default Search;
