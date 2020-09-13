import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { UserContext } from './Context/UserContext';
import { Header } from 'semantic-ui-react';
import { makeStyles } from "@material-ui/core/styles";
const axios = require('axios');
const JSON5 = require('json5')

const columns = [,
  

  {
    title: "Image",
    dataIndex: "asin_image_link_list",  // this is the value that is parsed from the DB / server side
    render: theImageURL => <img style={{height:"50px",width:"50px"}} alt={theImageURL} src={theImageURL} />  // 'theImageURL' is the variable you must declare in order the render the URL
},
  {
    title: 'Name',
    dataIndex: 'asin_name',
  },
  {
    title: 'Category',
    dataIndex: 'asin_category_name',
  },
  {
    title: 'Manufacurer',
    dataIndex: 'Manufacturer',
  },
  {
    title: 'ASIN',
    dataIndex: 'asin_product',
  },

];



const data = [
];





// for (let i = 0; i < 18; i++) {
//   data.push({
//     key: i,
   
//     img:  {render:  () => <img src={`https://res.cloudinary.com/gunishmatta/image/upload/v1599726215/pexels-photo-2182727_d877fy.jpg`} />}
//     ,
   
   
//     name: ` King Version ${i}`,
//     category: `Watch`,
//     manuf:`Rolls`,
// asin:`12233ABCDD${i}`
//   });
// }


export default function ProductTable() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        height: "auto",
        overflow: "hidden",
        minHeight: "550px",
        minWidth : "65.875rem"
      }

    }
  }));
  const classes = useStyles();
  const [tableData, setTableData] = useState({
    loading: false,
tbdata : []
  });

  const url = "http://34.83.163.106:5000/vaartani/ai/api/v1.0/form/amazonus/seller/asindetails/list";
  const data2 = [];
  useEffect(() => {
setTableData({loading:true})

    // POST request using fetch inside useEffect React hook
    async function getData() {
      try {
        const response = await axios.post(url, {
          "seller_node": "A13MA8Q8Y6VLEQ"
        
        });

        console.clear();
        const mydata = JSON5.parse(response.data);
        console.log(mydata.asin_details_list[1]);
       const mdata = mydata.asin_details_list;
       console.log(mdata);
      //  for (let i = 0; i <mdata.length; i++) {
      //     data2.push({
      //       key: i,
      //       img:  {render:  () => <img src={`https://res.cloudinary.com/gunishmatta/image/upload/v1599726215/pexels-photo-2182727_d877fy.jpg`} />},
      //       name: `${mydata.asin_details_list[i].asin_name}`,
      //       category: `${mydata.asin_details_list[i].asin_category_name}`,
      //       manuf:`${mydata.asin_details_list[i].Manufacturer}`,
      //   asin:`${mydata.asin_details_list[i].asin_product}`
      //     });
      //   }


        setTableData({
          loading: false,
          tbdata : mdata
        })



      }
      catch (err) {
        console.log(err);
      }

    }

    getData();
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

console.log(data);

  const [state, setState] = useState({
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
              {`Total 27 items`}
            </h4>

          </div>
       
          <Table pagination={{ pageSize: 3 }} size="small" rowSelection={rowSelection} columns={columns} dataSource={tableData.tbdata} />
          <UserContext.Consumer >
            {({ currentStep, onChanged, nextStep, prevStep }) =>
              <div className="addressformbuttons">
                <button className="ui  button btn" style={{ margin: "0.5rem" }} onClick={prevStep}>
                  Previous
      </button>
                <button className="ui  primary button btn" style={{ margin: "0.5rem" }} onClick={nextStep}>
                  Next
      </button>
              </div>}
          </UserContext.Consumer>

        </div>

      </Paper>
    </div>
  );

}

