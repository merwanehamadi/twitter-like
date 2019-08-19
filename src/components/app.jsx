import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';
class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      gifs: [],
      selectedGifId: "i",
    };
  }

  search = (query) => {
    giphy('xLVz91bNpxQyF2DSDMxIVy7hYxJxrcK9').search({
      q: query,
      rating: 'g'
    },
    (error, result) => {
      this.setState({
        gifs: result.data
      });
      });
    }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs =[
      {id: "xT9IgDEI1iZyb2wqo8"},
      {id: "l0HUfvpxcXSuuf0dO"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateGifFunction={this.updateGif} />
        </div>
      </div>
    );
  }
}
export default App;
