import React from 'react';
import { PropTypes } from 'prop-types';
import shallowCompare from './shallowCompare';

class WrapperComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { context, mapStateToProps } = this.props;
    return shallowCompare(mapStateToProps(context), mapStateToProps(nextProps.context));
  }
  render() {
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    );
  }
}

WrapperComponent.propTypes = {
  context: PropTypes.object.isRequired,
  mapStateToProps: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default WrapperComponent;
