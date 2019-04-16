import React from 'react';
import styles from '../user.module.css';
import axios from 'axios';

class Filter extends React.Component {
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
    this.fetch();
  }
  fetch() {
    axios
      .get(`http://18.218.143.3:3001/api`)
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

          if ([...new Set(uniqueLabelList)][randomIndex]) {
            resultLabel.push([...new Set(uniqueLabelList)][randomIndex]);
          }
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
      this.setState({
        db: this.state.db.filter(artist =>
          artist.toLowerCase().includes(string.toLowerCase())
        ),
        label: this.state.label.filter(data =>
          data.toLowerCase().includes(string.toLowerCase())
        )
      });
    } else {
      this.setState({
        db: this.state.store,
        label: this.state.storeLabel
      });
    }
  }

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
          {this.state.db.map((artist, i) => (
            <div key={i}>{artist}</div>
          ))}
        </div>
        <div className={styles.artistAndLabels}>
          MY LABELS
          <span className={styles.addSpace}>View All</span>
        </div>
        <div className={styles.artist}>
          {this.state.label.map((label, i) => (
            <div key={i}>{label}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
