import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [fromdata,setFormdata] = useState({name:"",email:"",phone:""})
  const [users,setUsers] = useState([])

  const handleChange=(e)=>{
    setFormdata({...fromdata,[e.target.name]:e.target.value})
  }

   const fetchItems = async()=>{
    const res = await axios.get("http://localhost:5000/getUser")
    setUsers(res.data.data)

  }

  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/create",fromdata)
      alert(response.data.message)
       fetchItems()
       setFormdata('')
    } catch (error) {
      console.error("error submitted")
    }
  }

  const handleDelete = async(id)=>{
    try {
      await axios.delete(`http://localhost:5000/deleteuser/${id}`)
      fetchItems()
      const updateditem = users.filter(item=> item._id !==id)
      setUsers(updateditem)
    } catch (error) {
      console.log("error deleting")
    }
  }

 

  useEffect(()=>{
    fetchItems()
  },[])

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input name='name' placeholder='type your name' onChange={handleChange} />
        <input  name='email' placeholder='type your email' onChange={handleChange} />
        <input  name='phone' placeholder='type your phone' onChange={handleChange} />
        <button type='submit'>Submit</button>

      </form>
      <div>
        <h1>User-list</h1>
        <ul>
          {
            users.map(user=>(
              <li key={user._id}>{user.name} - {user.email} ({user.phone}) <button onClick={()=>handleDelete(user._id)}>delete</button></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
