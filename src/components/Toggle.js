import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'

const Toggle = ({ title, filter, active, onSelected }) => {
  if (active) {
    return <Text style={{ color: 'red', fontSize: 20 }}>{title}</Text>
  } else {
    return <Button title={title} onPress={onSelected} />
  }
};

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelected: () => dispatch(setVisibilityFilter(ownProps.filter))
})



export default connect(mapStateToProps, mapDispatchToProps) (Toggle);
