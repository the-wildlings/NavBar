import React from 'react';
// import styles from '../header.module.css';
import Autosuggest from 'react-autosuggest';
import styles from '../user.module.css';
import axios from 'axios';
// import axios from 'axios';

class Filter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: '',
  //     db: [
  //       { artist: 'Alexander Lewis' },
  //       { artist: 'Bixel' },
  //       { artist: 'Darius' },
  //       { artist: 'Gorgon City' },
  //       { artist: 'Kartel' }
  //     ],
  //     suggestions: []
  //   };
  //   this.onChange = this.onChange.bind(this);
  //   this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
  //     this
  //   );
  //   this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
  //     this
  //   );
  //   this.getSuggestionValue = this.getSuggestionValue.bind(this);
  //   this.renderSuggestion = this.renderSuggestion.bind(this);
  //   this.getSuggestions = this.getSuggestions.bind(this);
  //   // this.fetch = this.fetch.bind(this);
  // }
  // // componentDidMount() {
  // //   this.fetch();
  // // }
  // // fetch() {
  // //   axios
  // //     .get('/api')
  // //     .then(response =>
  // //       this.setState(
  // //         {
  // //           db: response.data
  // //         },
  // //         () => console.log(this.state.db)
  // //       )
  // //     )
  // //     .catch(err => console.error(err));
  // // }
  // onChange(event, { newValue }) {
  //   this.setState({
  //     value: newValue
  //   });
  // }

  // onSuggestionsFetchRequested({ value }) {
  //   this.setState({
  //     suggestions: this.getSuggestions(value)
  //   });
  // }

  // onSuggestionsClearRequested() {
  //   this.setState({
  //     suggestions: []
  //   });
  // }
  // getSuggestionValue(suggestion) {
  //   suggestion.title;
  // }

  // getSuggestions(value) {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;

  //   return inputLength === 0
  //     ? []
  //     : this.state.db.filter(
  //         data =>
  //           // data.title.toLowerCase().slice(0, inputLength) === inputValue ||
  //           data.artist.toLowerCase().slice(0, inputLength) === inputValue
  //         // data.album.toLowerCase().slice(0, inputLength) === inputValue
  //       );
  // }

  // renderSuggestion(suggestion) {
  //   return <div>{suggestion.artist}</div>;
  // }

  // render() {
  //   const { value, suggestions } = this.state;

  //   const inputProps = {
  //     placeholder: 'Search...',
  //     value,
  //     type: 'search',
  //     onChange: this.onChange
  //   };

  //   return (
  //     <Autosuggest
  //       theme={theme}
  //       suggestions={suggestions}
  //       onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
  //       onSuggestionsClearRequested={this.onSuggestionsClearRequested}
  //       getSuggestionValue={this.getSuggestionValue}
  //       renderSuggestion={this.renderSuggestion}
  //       inputProps={inputProps}
  //     />
  //   );
  // }
  constructor(props) {
    super(props);
    this.state = {
      db: [],
      value: '',
      id: 1
    };
    this.filterDb = this.filterDb.bind(this);
    this.fetch = this.fetch.bind(this);
  }
  componentDidMount() {
    // this.setState({
    //   db: [
    //     { artist: 'Alexander Lewis' },
    //     { artist: 'Bixel' },
    //     { artist: 'Darius' },
    //     { artist: 'Gorgon City' },
    //     { artist: 'Kartel' }
    //   ]
    // });
    this.fetch();
  }
  fetch() {
    // (async () => {
    // let id = 1;
    //   for (let i = 1; i <= 5; i++) {
    //     id = Math.floor(Math.random() * 10) + 1;
    //     await

    axios
      .get(`/api`)
      .then(response => {
        let arr = [];
        response.data.forEach(item => arr.push(item.artist));
        let arr2 = new Set([arr]);
        // arr.push(response.data);
        console.log([...new Set(arr)]);
        // let arr2 = new Set([arr]);
        // let result = [];
        // for (let i = 0; i < 5; i++) {
        //   let randomIndex = Math.floor(Math.random() * 10) + 1;
        //   result.push(arr[randomIndex]);
        // }
        this.setState({
          db: [...new Set(arr)]
        });
      })
      .catch(err => console.error(err));
    //   }
    // })();
  }

  filterDb(e) {
    let string = e.target.value;
    if (string.length) {
      this.setState(
        {
          db: this.state.db.filter(data =>
            data.toLowerCase().includes(string.toLowerCase())
          )
        },
        () => console.log(string)
      );
    } else {
      this.fetch();
    }
  }
  // response.data.filter(item => {
  //   for (let i = 0; i <= 5; i++) {
  //     let randomNum = Math.floor(Math.random() * 10) + 1;
  //     if (item.id === randomNum) {
  //       if (!arr.find(element => element.artist === item.artist)) {
  //         arr.push(item);
  //       }
  //     }
  //   }
  //   return arr;
  // })
  render() {
    return (
      <div>
        <input
          className={styles.filter}
          placeholder="FILTER"
          onChange={this.filterDb}
        />
        <div className={styles.artistAndLabels}>
          MY ARTISTS
          <span className={styles.addSpace}>View All</span>
        </div>
        <div className={styles.artist}>
          {this.state.db.map(artist => (
            <div>{artist}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
