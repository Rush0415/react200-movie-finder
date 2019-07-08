import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const search = this.props;
    return (
      <div>
        <h1>Movie Search Container</h1>
      </div>
    );
  }
}

export default MovieSearchContainer;
