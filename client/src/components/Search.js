import React from 'react';
import Autosuggest from 'react-autosuggest';
import theme from '../theme.css';
import axios from 'axios';
import Mag from './magnifierImg.js';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      db: [],
      suggestions: []
      // artist: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.renderInputComponent = this.renderInputComponent.bind(this);
    this.fetch = this.fetch.bind(this);
  }
  componentDidMount() {
    this.fetch();
  }
  fetch() {
    axios
      .get('/api')
      .then(response =>
        this.setState(
          {
            db: response.data
          },
          () => console.log(this.state.db)
        )
      )
      .catch(err => console.error(err));
  }
  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState(
      {
        suggestions: this.getSuggestions(value)
      },
      () => console.log(this.state.artist)
    );
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
      artist: []
    });
  }
  getSuggestionValue(suggestion) {
    suggestion.title;
    // suggestion;
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.db.filter(
          data => data.title.toLowerCase().slice(0, inputLength) === inputValue //||
          // data.artist.toLowerCase().slice(0, inputLength) === inputValue ||
          // data.album.toLowerCase().slice(0, inputLength) === inputValue
        );
  }

  renderSuggestion(suggestion) {
    console.log(suggestion); //need to deal with suggesting duplicate artist name
    //if none of the letter matches at first see if the word is included in any of the words in the db.
    // let artist = [];
    // if (!artist.includes(suggestion.artist)) {
    // artist[suggestion.artist] = suggestion.artist;
    //   artist.push(suggestion.artist);
    // }
    // if (!this.state.artist.includes(suggestion.artist)) {
    //   this.setState({
    //     artist: this.state.artist.push(suggestion.artist)
    //   });
    // }

    return (
      <div>
        <div>{suggestion.title}</div>
        {/* <div >{suggestion.artist}</div> */}
        {/* <div >{suggestion.album}</div> */}
      </div>
      // this.state.artist.map(artist => {
      //   <div>{artist}</div>;
      // })
    );
  }
  renderInputComponent(inputProps) {
    return (
      <div className={theme.inputContainer}>
        <div className={theme.icon}>
          <Mag />
        </div>
        <input {...inputProps} />
      </div>
    );
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search...',
      value,
      type: 'search',
      onChange: this.onChange
    };

    return (
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={this.renderInputComponent}
      />
    );
  }
}

export default Search;
