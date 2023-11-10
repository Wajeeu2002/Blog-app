"use client"
import { useState } from "react"
import{useRouter} from "next/navigation"

export default function createForm() {
  const [title, setTitle] =useState("");
  const [body, setBody] =useState("");
  const [priority, setPriority] =useState("");
  const [loading, setLoading] =useState("");

    return (
    <div>
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
    <select
    onChange={(e)=> setPriority(e.target.value)}
    
    >

    </select>

    </div>
  )
}
