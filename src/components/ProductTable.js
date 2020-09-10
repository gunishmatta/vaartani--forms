import React,{useState} from 'react';
import { Table, Button } from 'antd';
import Paper from "@material-ui/core/Paper";

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
for (let i = 0; i < 46; i++) {
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

          <span style={{ margin: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
          <span style={{ margin: 8 }}>
            { `Total ${data.length} items`}
          </span>

          </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
</Paper>
</div>
      );
  
}

