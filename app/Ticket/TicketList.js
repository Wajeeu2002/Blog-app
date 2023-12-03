import Link from "next/link";
async function getTickets () {
 
    const res = await fetch("http://localhost:4000/tickets",{
      next:{
        revalidate:0
      }
    })
    const data = res.json() 
    return data;
     
}

export default async function TicketList({params}) {
  const tickets = await getTickets()
    return (
     <div >
        {tickets.map((ticket)=>(
          <div key ={ticket.id} className="mytickets">
           <Link className="myLink" href ={`/Ticket/${ticket.id}`}>
           <h3>{ticket.title}</h3>
           <p>{ticket.body}...</p>
           <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
           </div>
          </Link>
        
        </div>
          ))}
    {tickets.lenght===0 &&(<p>There are no open tickets, yayy!</p>)}
    </div>
  )
}
