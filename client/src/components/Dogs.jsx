import React from "react";
import DogsCards from "./DogsCards";
import { getDogs } from "../redux/actions";
import { connect } from "react-redux";
import s from "styled-components";

class Dogs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDogs();
  }

  render() {
    return (
      <div>
        {this.props.currentDogs.length > 0 ? (
          this.props.currentDogs.map((dog) => {
            return (
              <Div key={dog.id}>
                <DogsCards
                  image={dog.image}
                  name={dog.name}
                  min_weight={dog.min_weight}
                  max_weight={dog.max_weight}
                  temperament={dog.temperament}
                  key={dog.id}
                  id={dog.id}
                />
              </Div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDogs: () => dispatch(getDogs()),
  };
};

const Div = s.div`
  display: inline-block;
  margin-top: 50px;
`

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
