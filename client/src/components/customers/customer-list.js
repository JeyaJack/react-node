import React, { useEffect, useState } from 'react';




function CustomerList() {
     const [customers, setCustomers] = useState([])
    useEffect(() => {
        geCustomersAsync()
      }, [customers])

    async function geCustomersAsync() {
        console.log("calling......")
        let response = await fetch("http://localhost:3020/api/customer");
        let data = await response.json();
        console.log(JSON.stringify(data));
        setCustomers({ customers: data })
    }
    console.log(customers);
 
    if (customers.length===0) return (
        <div>Loading.....</div>

    )
     
    
    const custList = customers.customers.map((aCust) => (
        <li id={aCust.id}>{aCust.firstName}</li>
    )) 
    return (
        <div >

            <h1>Customer List</h1>
            <ul id="custlist">
            {custList}
            </ul>
          
        </div>
    );
}

export default CustomerList;
