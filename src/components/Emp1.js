import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Link ,useHistory} from 'react-router-dom';



const empdata=[];



const Emp1=()  =>{


  let history = useHistory();
  
 
  const [Data, setData] = useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
          setData(result.data);
      })
  }, []);

 const  detailspage= () =>{
  history.push('/details')

 }
   
   
  return(
    
      <div>
          <h1>Welcome Admin</h1>
          <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>city</th>
        <th>phone</th>
      </tr>
    </thead>
    <tbody>
          {
       Data.map(item=>{
         return <tr key={item.id}>
           <td>{item.name}</td> 
           <td>{item.username}</td>
           <td>{item.email}</td>
           <td>{item.address.city}</td>
           <td>{item.phone}</td>
           <button  type="button" class="btn btn-success" onClick={detailspage}>Show Details</button>
       
           </tr>
       }
    
       )
          }
          </tbody>
          </table>
      </div>
    
  )



  }
    export default Emp1