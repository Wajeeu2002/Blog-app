import CreateForm from "./createForm"


export default function page() {
  return (
    <div>
      <h1 style = {{textAlign:"center", marginTop:"1.5em"}}>
        Add a New Ticket
      </h1>
      <CreateForm />
    </div>
  )
}


