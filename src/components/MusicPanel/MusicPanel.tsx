import React from 'react';
import Search from '../Search/Search';
import './MusicPanel.scss';

function MusicPanel() {
  return (
    <div className="music-panel">
      <section className="left-panel"></section>
      <section className="middle-panel">
        <div className="search-wrapper">
          <Search />
        </div>
      </section>
      <section className="right-panel"></section>
    </div>
  );
}

export default MusicPanel;
