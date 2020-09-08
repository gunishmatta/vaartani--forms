import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Header } from "semantic-ui-react";
export default function PolicyComponent()
{

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
     
return(
    <div className={classes.root}>
    <Paper elevation={3}>
    
    <Container className="businesspageheader">
          <Header textAlign="center"  as="h2">
            Policy Coverage
          </Header>
          
        </Container>

    </Paper>
    </div>
)

}