import React from 'react';
import { connect } from 'react-redux';


export class IndexView extends React.Component {

  render () {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(IndexView);
