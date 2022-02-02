// import React, { useState } from 'react'
// import Button from "./Button";


// // MASTERING useState hook WITH FORMS
// const Form = ({onClick:handleClick}) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     body: "",
//     date: ""
//   })

//   const [title, setTitle] = useState("")
//   const [body, setBody] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData);
//   }
  // return ( 
//     <form onSubmit={handleSubmit}>
//       <h1> Our Form </h1>
//       <label htmlFor="title">Title</label>
//       <input onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
//       <p>{formData.title}</p>

//       <label htmlFor="body">Body</label>
//       <textarea onChange={(e) => setFormData({...formData, body: e.target.value})} value={formData.body} name="body" id="body"></textarea>

//       <label htmlFor="body">Date</label>
//       <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} value={formData.date} name="body" id="body"></input>
//       <input type="submit" value="Submit" />
//     </form>
    // <Button text="Submit Button" color="indigo"/>

//   );
// }

//  export default Form;