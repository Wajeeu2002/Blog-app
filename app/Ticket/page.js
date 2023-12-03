import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
<div>
  <nav>
    <div>
      <h2 style={{marginTop:"1.5em", marginLeft:"1.5em"}}>Tickets</h2>
      <p style={{marginLeft:"1.5em"}}>Currently open tickets</p>
    </div>
  </nav>
  <Suspense  fallback ={<Loading/>}>
  <TicketList />
  </Suspense>
     
</div>
  )
}
