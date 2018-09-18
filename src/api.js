
class Api {
    static getCustomers = () => {
       return fetch("https://localhost:5001/Customers").then(e => e.json())
    }

}

export default Api