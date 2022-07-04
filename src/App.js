import { useState } from 'react';
import './App.css';

let data = [], id = 0;

function App() {

  const [course, setCourse] = useState(""); 
  const [DATA, setDATA] = useState([]);
  //add course
  const [edit, setEdit] = useState(false);
  //
  const [newCourse, setNewCourse] = useState("");
  const [newCourseID, setNewCourseID] = useState(null);

  const add = () => {
    if (isNaN(course) && course.length !== 0) {
      const newData = {
        id: ++id,
        course: course
      }
      data.push(newData);
      setCourse("");
      setDATA(data);
    }
  }

  const change = () => {
    for (const i in data) {
      if (newCourseID === data[i].id) {
        data[i].course = newCourse;
      }
    }
    setEdit(false);
    setNewCourse("");
  }

  const dlt = (id) => {
    data = data.filter(data => data.id !== id);
    setDATA(data);
  }
  
  const edt = (id) => {
    setEdit(true)
    setNewCourseID(id)
  }

  return (
    <main>
      <div>
        <h1>Add Courses</h1>
        <div className="input-field">
          {!edit && <input type="text" placeholder="Enter your course" value={course} onChange={(e) => setCourse(e.target.value)}/>}
          {edit && <input type="text" placeholder="Edit your course" value={newCourse} onChange={(e) => setNewCourse(e.target.value)}/>}
          {!edit && <button onClick={add}>Add course</button>}
          {edit && <button onClick={change}>Set course</button>}
        </div>
        <div className="data-field">
          {DATA.map(dt => (
            <div className="data" key={dt.id}>
              <h2>{dt.course}</h2>
              <div>
                <button onClick={() => edt(dt.id)} className="edit">Edit Course</button>
                <button onClick={() => dlt(dt.id)} className="delete">Delete Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
