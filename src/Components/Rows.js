import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RowItem from './RowItem'


export default class Rows extends Component {


  render() {
    return this.props.row.map((word) => (
        <RowItem key = {word.id} word = {word} delKeyWord = {this.props.delKeyWord} />
    ) )
  }
}


// PropTypes
Rows.propTypes = {
  row: PropTypes.array.isRequired
} 