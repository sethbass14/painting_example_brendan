import React from 'react';
import PaintingList from './PaintingList';
import paintings from '../data/artworks';

class PaintingContainer extends React.Component {
  // console.log('PaintingList props', props);
  constructor(props) {
    super(props);

    this.state = {
      paintings
    };
  }

  deletePainting = (id) => {
    this.setState(prevState => {
      return { paintings : prevState.paintings.filter(painting => painting.id !== id)}
    })
  }

  handleVote = id => {
    const updatedPaintings = this.state.paintings.map(p => {
      if (p.id === id) {
        return Object.assign(p, { votes: p.votes + 1 });
      } else {
        return p;
      }
    });
    this.setState({ paintings: updatedPaintings });
  };

  render() {
    return (
      <PaintingList
        deletePainting={this.deletePainting}
        handleVote={this.handleVote}
        paintings={this.state.paintings}
      />
    );
  }
}

export default PaintingContainer;
