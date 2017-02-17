import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basicActionCreators from './actions/basic';

class IncrementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.basic.isOpen) {
      this.props.basicActions.closeButton()
      
    } else {
      this.props.basicActions.openButton()
    }
  }

  render() {
    const table = <div>this is a table</div>;
    return (
      <button onClick={this.handleClick}>
        {this.props.basic.isOpen ? 'See Table' : 'Close Table'}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  basic  : state.basic,
});

const mapDispatchToProps = (dispatch) => ({
  basicActions : bindActionCreators(basicActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementComponent);
