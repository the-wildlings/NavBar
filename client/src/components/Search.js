// import ReactAutoSuggestDropdown from 'react-autosuggest-dropdown-menu';
import React from 'react';
import styles from '../header.module.css';
import Autosuggest from 'react-autosuggest';
import theme from '../theme.css';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      db: [],
      suggestions: []
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
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }
  getSuggestionValue(suggestion) {
    suggestion.title;
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.db.filter(
          data => data.title.toLowerCase().slice(0, inputLength) === inputValue
        );
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion.title}</div>;
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'search',
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
      />
    );
  }
}

export default Search;
