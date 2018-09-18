import React, { Component } from "react";
import Customers from "./Customers";
import Employees from "./Employees";
import Computers from "./Computers";
import Departments from "./Departments";
import Orders from "./Orders";
import PaymentTypes from "./PaymentTypes";
import ProductTypes from "./ProductTypes";
import Products from "./Products";
import Trainings from "./Trainings";
import api from "./api";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PostNew from "./PostNew";

class MainView extends Component {
  state = {
    display: "Customers",
    data: [],
    columns: [],
    keyArray: [],
    defaultPageSize: 5,
    pageSizeOptions: [3, 6],
    apiData: {}
  };

  //   whatToDisplay = {
  //     Customers: <Customers />,
  //     Employees: <Employees />,
  //     Computers: <Computers />,
  //     Departments: <Departments />,
  //     Orders: <Orders />,
  //     PaymentTypes: <PaymentTypes />,
  //     ProductTypes: <ProductTypes />,
  //     Products: <Products />,
  //     Trainings: <Trainings />
  //   };

  handleFieldChange = e => {
    console.log(e.target);
    let apiData = this.state.apiData;
    apiData[e.target.id] = e.target.value;
    this.setState({ apiData });
  };

  postNewToDb(e) {
    api.insertIntoDb(this.state.display, this.state.apiData);
  }

  selectMenu = () => {
    console.log(this.refs.menu.value);
    this.setState({
      display: this.refs.menu.value
    });
    console.log("change in select menu");
  };

  componentDidMount() {
    this.buildTableData();
    // api.getTable(this.state.display).then(d => this.setState({ data: d }));
    // console.log(this.state.data);
    // // data[0].keys(k => k.map(k => this.state.columns.push(k)));
    // // this.setState({
    // //   data: data
    // // });
  }

  buildTableData() {
    api.getTable(this.state.display).then(tableData => {
      let keyArray = Object.keys(tableData[0]);
      let myArray = [];
      keyArray.map(key => myArray.push({ Header: key, accessor: key }));

      console.log(tableData, keyArray);
      this.setState({
        data: tableData,
        columns: myArray,
        keyArray: keyArray
      });
    });
  }

  //   {
  //     Header: "Name",
  //     accessor: "name"

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.data !== this.state.data && this.state.data[0]) {
    //   let keyArray = Object.keys(this.state.data[0]);
    //   let myArray = [];
    //   keyArray.map(key => myArray.push({ Header: key, accessor: key }));
    //   this.setState({ columns: myArray });
    //   //   this.state.data[0].keys(k => k.map(k => this.state.columns.push(k)));
    // }
    console.log(
      "previeous state display",
      prevState.display,
      "new display value",
      this.state.display
    );
    if (prevState.display !== this.state.display) {
      this.buildTableData();
      console.log("display value has changed fetching data");
    }
  }

  render() {
    let myComponent = <div>{`${this.state.display}`}</div>;
    return (
      <div>
        <div>
          <h1>Welcome To Bangazon API</h1>
          <h3>Choose Table</h3>
          <select ref="menu" onChange={this.selectMenu}>
            <option value="Customers">Customers</option>
            <option value="Employees">Employees</option>
            <option value="Computers">Computers</option>
            <option value="Departments">Departments</option>
            <option value="Orders">Orders</option>
            <option value="PaymentTypes">Payment Types</option>
            <option value="ProductTypes">Product Types</option>
            <option value="Products">Products</option>
            <option value="Trainings">Trainings</option>
          </select>
        </div>
        {/* {this.whatToDisplay[this.state.display]} */}
        <h2>{this.state.display}</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.postNewToDb(e);
          }}
        >
          {this.state.keyArray.map(key => {
            if (key !== "id") {
              return (
                <PostNew
                  fieldName={key}
                  handleFieldChange={this.handleFieldChange}
                />
              );
            }
          })}
          <button type="submit">Submit new</button>
        </form>
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          defaultPageSize={3}
          pageSizeOptions={[3, 6]}
        />
      </div>
    );
  }
}

export default MainView;
