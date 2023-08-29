import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ShowData from './ShowData';

function FetchData() {

    const [jsonData, setJsonData] = useState([]);
    const [displayBtn, setDisplayBtn] = useState(false)
    const [selectData, setSelectData] = useState([])

    const display = function (displayData, id) {
        console.log(displayData.address);
        setSelectData(displayData);
        setDisplayBtn(true)
        
    }

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res);
            setJsonData(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

  return (
    <>
        <div className='card' >

            <table className ="table table-hover">
                <thead className ="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Website</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        jsonData.map((data)=>(
                            <tr  >
                                <td> {data.id} </td>
                                <td> {data.name} </td>
                                <td> {data.username} </td>
                                <td> {data.email} </td>
                                <td> {data.phone} </td>
                                <td> {data.website} </td>
                                <td>
                                    <button type="button" className ="btn btn-primary" onClick={() => display(data, data.id)}>
                                        Display
                                    </button>
                                    
                                </td>

                            </tr> 
                        ))  
                    }
                </tbody>
            </table>
            {
                displayBtn &&
            <ShowData showdetails={selectData}  Btn = {setDisplayBtn}/>
            }
        </div>
    </>
  )
}

export default FetchData
