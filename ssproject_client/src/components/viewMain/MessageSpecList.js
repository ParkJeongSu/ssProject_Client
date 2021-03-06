﻿import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function MessageSpecList() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Title>Message Spec List</Title>
        <div className={classes.root}>
        <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
          {renderRow}
        </FixedSizeList>
      </div>
    </React.Fragment>
  );
}