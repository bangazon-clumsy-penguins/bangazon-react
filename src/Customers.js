import React, { Component } from "react"
import api from "./api"
class Customers extends Component {
    render(){
        api.getCustomers().then(e => {
            console.log(e)
            e.map(e => {console.log(e.firstName)
                
            })
        })
        return(
            <div>
            <h2>Customers Component</h2>
            <ul>
                {/* {allCustomers.map(e => console.log(e.firstName))} */}
            </ul>
            </div>
        )
    }
}

export default Customers