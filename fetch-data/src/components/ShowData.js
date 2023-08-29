import React, {useEffect, useState} from 'react'



function ShowData({showdetails, Btn}) {
    
    console.log(showdetails, typeof(showdetails));
    const address = showdetails.address;
    console.log(address)
    const company = showdetails.company;
    console.log(company)


    
  return (
    <>
        <div className='mx-auto' >
        <h4>Details:</h4>
         <table className =" table table-secondary ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Username</th>
              <th>Website</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            
                <tr>              
                  <td> {showdetails.id} </td> 
                  <td> {showdetails.name} </td> 
                  <td> {showdetails.username} </td>
                  <td> {showdetails.email} </td>
                  <td> {showdetails.phone} </td>
                  <td> {showdetails.website} </td> 
                   
                  <td>
                    <ul  >
                      <li style={{listStyleType : 'none'}}>
                        Street: {address.street}
                      </li>  
                      <li style={{listStyleType : 'none'}}>
                        Suite: {address.suite}
                      </li>
                      <li style={{listStyleType : 'none'}}>
                        City: {address.city}
                      </li>
                      <li style={{listStyleType : 'none'}}>
                        Zipcode: {address.zipcode}
                      </li>
                    </ul>
                  </td>
                  
                  <td> {company.name} </td> 

                  <td>
                    <button type="button" className ="btn btn-primary" onClick={()=>{Btn(false)}}>
                      Close
                    </button>
                  </td>
                </tr>

          </tbody>

        </table>   
        
        </div>
    </>
  )
}

export default ShowData
