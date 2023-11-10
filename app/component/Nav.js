import Link from "next/link" ;

export default function Nav() {
  return (
    <div>
      <span className="dojo" >
        <h1 className="heading">Dojohelpdesk</h1>
        <Link href ="/"  className="link1">Dashboard</Link> 
        <Link href="/Ticket"  className="link2">ticket</Link>
    </span>
    </div>

  )
}
