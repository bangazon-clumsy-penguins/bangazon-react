import React, { Component } from 'react';
import Customers from "./Customers"
import Employees from "./Employees"
import Computers from "./Computers"
import Departments from "./Departments"
import Orders from "./Orders"
import PaymentTypes from "./PaymentTypes"
import ProductTypes from "./ProductTypes"
import Products from "./Products"
import Trainings from "./Trainings"

class MainView extends Component {
    state = {
        display: "Customers"
    }

whatToDisplay = {
    Customers: <Customers />,
    Employees: <Employees />,
    Computers: <Computers />,
    Departments: <Departments />,
    Orders: <Orders />,
    PaymentTypes: <PaymentTypes />,
    ProductTypes: <ProductTypes />,
    Products: <Products />,
    Trainings: <Trainings />
}

selectMenu = () => {
    console.log(this.refs.menu.value)
    this.setState({
        display: this.refs.menu.value
    })
}

  render() {
      let myComponent = <div>{`${this.state.display}`}</div>
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
        {this.whatToDisplay[this.state.display]}
      </div>
    );
  }
}

export default MainView;