class Api {
  static getCustomers = () => {
    return fetch("https://localhost:5001/Customers").then(e => e.json());
  };

  //   static getCustomers = () => {
  //     return fetch("https://localhost:5001/Employees").then(e => e.json());
  //   };

  static getTable = tableName => {
    return fetch(`http://localhost:5000/${tableName}`).then(e => e.json());
  };

  static insertIntoDb = (tableName, postBody) => {
    return fetch(`http://localhost:5000/${tableName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
    });
  };

  //   postMessage(userId, message, timestamp) {
  //     return fetch("http://localhost:5002/messages", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //       body: JSON.stringify({
  //         userId: userId,
  //         message: message,
  //         timeStamp: timestamp
  //       })
  //     });
  //   }
}

export default Api;
