import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Link ,useHistory} from 'react-router-dom';







const Users=()  =>{


  let history = useHistory();
  
 
  const [Data, setData] = useState([]);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then(result => {
          setData(result.data);
      })
  }, []);

 const  detailspage= () =>{
  history.push('/details')

 }
   
   
  return(
    
      <div>
          <h1>Welcome User</h1>
       
          <table class="table table-striped">
    <thead>
      <tr>
        <th>Title</th>
        <th>price</th>
        <th>category</th>
        <th>image</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
          {
       Data.map(item=>{
         return <tr key={item.id}>
           <td>{item.title}</td> 
           <td>{item.price}</td>
           <td>{item.category}</td>
           <td>{item.image}</td>
           <td>{item.description}</td>
         
           <Link to={`/edit/${item.id}`} className="btn btn-primary">view</Link>
           </tr>
       }
    
       )
          }
          </tbody>
          </table>
      </div>
    
  )



  }
    export default Users