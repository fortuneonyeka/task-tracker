import {useState} from 'react';

 const AddTask = ({onAdd}) => {
   const [text, setText] = useState('')
   const [day, setDay] = useState('')
   const [reminder, setReminder] = useState(false)

   const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('please add text')
      return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
    // if (!day) {
    //   alert('please enter day')
    //   return
    // }
    // onAdd({text,day,reminder})
    // setText('')
    // setDay('')
    // setReminder('')
   }


  return(
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
          <label>Tasks</label>
            <input type="text" placeholder="Enter Task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
          <label>Day</label>
            <input type="text" placeholder="Add Day and TimeEnter Task" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
          <label>Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
};

export default AddTask
