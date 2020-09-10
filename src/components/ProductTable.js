import React,{useState} from 'react';
import { Table, Button } from 'antd';
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import {UserContext} from './Context/UserContext';
import {Header} from 'semantic-ui-react';

import { makeStyles } from "@material-ui/core/styles";
const columns = [
  {
    title: 'Image',
    dataIndex: `img`,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
  {
    title: 'Manufacurer',
    dataIndex: 'manuf',
  },
  {
    title: 'ASIN',
    dataIndex: 'asin',
  },

];

const data = [];
for (let i = 0; i < 18; i++) {
  data.push({
    key: i,
   
    img:  {render:  () => <img src={`https://res.cloudinary.com/gunishmatta/image/upload/v1599726215/pexels-photo-2182727_d877fy.jpg`} />}
    ,
   
   
    name: ` King Version ${i}`,
    category: `Watch`,
    manuf:`Rolls`,
asin:`12233ABCDD${i}`
  });
}



export default function ProductTable() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        marginLeft: "17em",
        height: "auto",
        overflow: "hidden",
        minHeight:"550px",
      }
  
    }
  }));
  const classes = useStyles();

  const [state,setState] = useState({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  });

  const start = () => {
    setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setState({ selectedRowKeys });
  };

  
    const { loading, selectedRowKeys } = state;
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className={classes.root}>
      <Paper elevation={3}>
    
      <div>
        <div style={{ marginBottom: 16 }}>
        <div className="businesspageheader">
        <Header textAlign="center" as="h2">
          Product         </Header>
      </div>

          <span style={{ margin: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
          <h4 style={{ margin: 8 }} disabled>
            { `Total ${data.length} items`}
          </h4>

          </div>
        <Table  pagination={{ pageSize: 6 }} rowSelection={rowSelection} columns={columns} dataSource={data} />
        <UserContext.Consumer > 
        { ({currentStep,onChanged,nextStep,prevStep})=>
        <div className="addressformbuttons">
        <button  className="ui  button btn"  style={{margin:"0.5rem"}} onClick={prevStep}>
             Previous
      </button>
           <button className="ui  primary button btn" style={{margin:"0.5rem"}} onClick={nextStep}>
             Next
      </button>
      </div>}
      </UserContext.Consumer>
      
        </div>
</Paper>
</div>
      );
  
}

