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
      store: [],
      label: [],
      storeLabel: [],
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
    axios
      .get(`/api`)
      .then(response => {
        let artist = [];
        let label = [];
        response.data.forEach(item => {
          artist.push(item.artist);
          label.push(item.label);
        });

        let uniqueArtistList = [...new Set(artist)];
        let uniqueLabelList = [...new Set(label)];

        let resultArtist = [];
        let resultLabel = [];
        for (let i = 0; i < 5; i++) {
          let randomIndex = Math.floor(Math.random() * 5) + 1;
          resultArtist.push([...new Set(uniqueArtistList)][randomIndex]);
          resultLabel.push([...new Set(uniqueLabelList)][randomIndex]);
        }
        this.setState({
          db: [...new Set(resultArtist)],
          store: [...new Set(resultArtist)],
          label: [...new Set(resultLabel)],
          storeLabel: [...new Set(resultLabel)]
        });
      })
      .catch(err => console.error(err));
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
      this.setState({
        db: this.state.store
      });
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
        <div className={styles.artistAndLabels}>
          MY LABELS
          <span className={styles.addSpace}>View All</span>
        </div>
        <div className={styles.artist}>
          {this.state.label.map(label => (
            <div>{label}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
