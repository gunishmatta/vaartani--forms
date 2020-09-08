import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Header } from "semantic-ui-react";

import Typography from '@material-ui/core/Typography';
import { Slider } from 'antd';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}
export default function PolicyComponent() {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(100),
        marginLeft: "17em"
      }
    }
  }));
  const classes = useStyles();

  const marks = {
    1: '1m',
    2: '2m',
    3: '3m',
    4: '3m',
    5: '3m',
    6: '3m',
    7: '3m',
    8: '3m',
    9: '3m',
    10: {
      style: {
        color: '#f50',
      },
      label: <strong>10M $</strong>,
    },
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3}>

        <Container className="businesspageheader">
          <Header textAlign="center" as="h2">
            Policy Coverage
          </Header>

        </Container>
        <Container>

        <Slider min={1} max={10} marks={marks} step ={1} defaultValue={3} onChange={onChange} onAfterChange={onAfterChange} />
    
        </Container>
      </Paper>
    </div>
  )

}