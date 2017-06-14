import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'

const Toggle = ({ title, filter, active, onSelected }) => {
  if (active) {
    return <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
  } else {
    return (
      <TouchableOpacity onPress={onSelected}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
      </TouchableOpacity>)
  }
};

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelected: () => dispatch(setVisibilityFilter(ownProps.filter))
})



export default connect(mapStateToProps, mapDispatchToProps) (Toggle);
