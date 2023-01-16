import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { Link, useNavigate  } from "react-router-dom";
import Show from './showActivity';
import { useReducer, useState } from 'react';

function Activity() {

  const navigate = useNavigate();


        const [activity,setActivity] = useState({name: "", description: "", type: "", duration: "", date: ""});

    const handleInputs = (e) => {
        console.log(e)
        let value = e.target.value;
        setActivity({ ...activity, [e.target.name]: value });
    }

    const handleSelect = (e) => {
        setActivity({ ...activity, type: e });
    }

    const PostData = async (e) => {
          e.preventDefault();
          const {name, description, type, duration, date} = activity;

          const res = await fetch("http://localhost:8000/activities/add", {
            method: "POST",
            headers: {
              "Content-Type" : "application/json" 
            },
            body:
            JSON.stringify({
              name, description, type, duration, date
            })

          } )
            window.alert('Data Added!');
            navigate("/show");
    }
    



  return (

    <div className='container'>
      <br/>
      <h3>Add Activity</h3>
      <br/>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Activity Name
        </InputGroup.Text>
        <Form.Control
        name = "name"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={activity.name}
          onChange={handleInputs}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Descripiton
        </InputGroup.Text>
        <Form.Control
        name = "description"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={activity.description}
          onChange={handleInputs}
        />
      </InputGroup>


      <InputGroup className="mb-3">
      <Dropdown name="type" onSelect={handleSelect} value={activity.type}>
      <Dropdown.Toggle id="dropdown-basic">
        Activity Type
      </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item eventKey="Run" value="Run">Run</Dropdown.Item>
        <Dropdown.Item eventKey="Bicycle" value="Bicycle">Bicycle</Dropdown.Item>
        <Dropdown.Item eventKey="Ride" value="Ride">Ride</Dropdown.Item>
        <Dropdown.Item eventKey="Swim" value="Swim">Swim</Dropdown.Item>
        <Dropdown.Item eventKey="Walk" value="Walk">Walk</Dropdown.Item>
        <Dropdown.Item eventKey="Hike" value="Hike">Hike</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Duration
        </InputGroup.Text>
        <Form.Control
        name = "duration"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={activity.duration}
          onChange={handleInputs}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control name="date" type="date"  value={activity.date}
          onChange={handleInputs}/>
      </InputGroup>

      <InputGroup className="mb-3">
      <Button onClick={PostData}>Add Activity</Button>
      </InputGroup>

      <InputGroup className="mb-3">
      <Link to='show'><Button>Show Activities</Button></Link>
      </InputGroup>

      
        {console.log(activity)}


      
    </div>
  )
}

export default Activity;
