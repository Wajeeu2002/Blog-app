"use client";
import{useRouter} from "next/navigation";
import { useState } from "react";


 

export default function CreateForm() {
  
  const [title, setTitle] =useState("");
  const [body, setBody] =useState("");
  const [priority, setPriority] =useState("low");
  const [loading, setLoading] =useState(false);
  const router =useRouter()
  
  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    const blog= {title, body, priority, user_email:"ninja@gmail.com"};
    
    
    const res = await fetch('http://localhost:4000/tickets', {
     method: 'POST',
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(blog)
    })
    if(res.status === 201) {
    router.refresh();
    router.push("/Ticket")
     
    }
   
 }
  
  return (
<form onSubmit={handleSubmit} className="myform" >
  <label>
      <span>Title:</span>
      <input 
      required 
      type ="text"
      onChange={(e)=>setTitle(e.target.value)}
      value ={title}
      />
    </label>
    <label>
      <span> Body:</span>
    <textarea 
    required
    onChange={(e)=>setBody(e.target.value)}
    value ={body}
    />
    </label>
    <label>
      <span> Priority:</span>
    <select
    onChange={(e)=> setPriority(e.target.value)}
    value={priority}
    >
     <option value ="low">low</option>
     <option value="medium">medium</option>
     <option value="high">high</option>
    </select>
    </label>
    <button
    disabled= {loading}
    >
    {loading && <span>Adding...</span>}
    {!loading && <span>Add Tickets</span>}
    </button>
</form>
  )
}