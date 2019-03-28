import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }
  render() {
    return (
      <div>
        <h1>beatport</h1>
        <button>GENRES</button>
        <button>TRACKS</button>
        <button>RELEASES</button>
        <button>CHARTS</button>
        <button>STEMS</button>
        <button>SOUNDS</button>
      </div>
    );
  }
}
