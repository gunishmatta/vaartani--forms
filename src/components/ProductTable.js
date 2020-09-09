import React,{useState} from 'react';
import { Table, Button } from 'antd';
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 12,
    address: `London, Park Lane no. ${i}`,
  });
}



export default function ProductTable() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        height: theme.spacing(80),
        marginLeft: "17em"
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

