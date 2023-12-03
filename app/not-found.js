import Link from "next/link";

export default function NotFound () {
  return (
    <div className="notfound">
     <h2 className=""> "There was problem"</h2>
     <p className="paragraph1">We could not find the page you were looking for.</p> 
    <p> Go back to the <Link href ="/"> Dashboard</Link></p>
    </div>
  )
}
