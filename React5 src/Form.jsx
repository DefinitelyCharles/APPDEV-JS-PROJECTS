import React, {useState} from "react";
var attendace = [];

export default function Form(){
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(0);
    const [date, setDate] = useState(0);

    function handleIdChange (event)  {
        setId(event.target.value);
    }
    function handleNameChange (event)  {
        setName(event.target.value);
    }
    function handleCourseChange (event)  {
        setCourse(event.target.value);
    }
    function handleAgeChange (event)  {
        setAge(event.target.value);
    }
    function handleGenderChange (event)  {
        setGender(event.target.value);
    }
    function handleDateChange (event)  {
        setDate(event.target.value);
    }

    function addAttendance(){
        attendace.push({
            id: id,
            name: name,
            course: course,
            age: age,
            gender: gender,
            date: date
        })
        alert("Attendace Added!")
        setId(0);
        setCourse('');
        setName('');
        setAge(0);
        setGender('');
        setDate(0);
    }

    return(
        <>
            <h4>Student Attendance Information Form</h4>
            <div className = "form-container">
                ID Nunber: 
                <input type = "text"
                value = {id}
                onChange = {handleIdChange}/>
                
                <br/>

                Name: 
                <input type = "text"
                value = {name}
                onChange = {handleNameChange}/>

                <br/>

                Course: 
                <input type = "text"
                value = {course}
                onChange = {handleCourseChange}/>

                <br/>

                Age: 
                <input type="number" 
                value={age} 
                onChange={handleAgeChange}/> 

                <br/>

                Gender:
                <label>
                    Male 
                    <input type="radio" 
                    name="gender" 
                    value="male" 
                    checked={gender === "male"} 
                    onChange={handleGenderChange}/>
                </label>

                <label>
                    
                    Female 
                    <input type="radio" 
                    name="gender" 
                    value="female" 
                    checked={gender === "female"} 
                    onChange={handleGenderChange}/>
                </label>

                Date: 
                <input type ="text" 
                value={date}
                onChange={handleDateChange}/>
                
                <br/>

                <button 
                className="addAtten" 
                onClick={addAttendance}>
                    Add Attendance
                </button>

            </div>

            <div className="card-container">
                <h2>Student to be added:</h2>
                <p>Student ID Number: <strong>{id}</strong></p>
                <p>Student Name: <strong>{name}</strong></p>
                <p>Student Course: <strong>{course}</strong></p>
                <p>Student Age: <strong>{age}</strong></p>
                <p>Student Gender: <strong>{gender}</strong></p>
                <p>Student Attendance Date: <strong>{date}</strong></p>
            </div>
        </>

    )
}