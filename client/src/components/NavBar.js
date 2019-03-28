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
        <button id='genres'>GENRES</button>
        <button id='tracks'>TRACKS</button>
        <button id='releases'>RELEASES</button>
        <button id='charts'>CHARTS</button>
        <button id='stems'>STEMS</button>
        <button id='sounds'>SOUNDS</button>
        <input id='searchBar' />
        <button id='account'>account</button> 
        <button id='following'>following</button> 
        <button id='cart'>cart</button> 
      </div>
    );
  }
}
