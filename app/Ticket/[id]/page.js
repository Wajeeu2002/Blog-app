async function generateStaticParams(params) {
 const res = await fetch("http://localhost:4000/tickets")
 const data =res.json()
 return data.map(ticket => ({
id :  ticket.id
 }))
}



async function getTicket (id) {
  const res = await fetch("http://localhost:4000/tickets/" + id,{
    next:{
      revalidate:60
    }
  })
  const data = res.json() 
  return data;
   
}

export default async function TicketDetails({params}) {
 const ticket = await getTicket(params.id)
    return (
<div>
  <nav>
    <h2 className="ticketTitle">Ticket Details</h2>
  </nav>
<div className="tickets">
     
  <div className="ticketcard">
  <h3>{ticket.title}</h3>
     <small>created by {ticket.user_email}</small>
     <p>{ticket.body}</p>
     <div className={`pill ${ticket.priority}`}>
      {ticket.priority}
     </div>
  </div>
</div>
</div>
  )
}
