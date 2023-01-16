import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Show(){

  const [activities, setActivites] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const response = await fetch(`http://localhost:8000/activities/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setActivites(records);
    }
  
    getActivities();
  
    return;
  }, [activities.length]);

    return(
      <div>
        <Table striped bordered hover>
          
        <thead>
          <tr>
            <th>Activity Name</th>
            <th>Descripiton</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity,key) => {
      return(
        <tr key={key}>
          <td>{activity.name}</td>
          <td>{activity.description}</td>
          <td>{activity.type}</td>
          <td>{activity.duration}</td>
          <td>{activity.date}</td>
        </tr>
      )
    })}
        </tbody>
      </Table>

        <Link to={"/"}><Button>Add Activity</Button></Link>

      </div>
    )
}

export default Show;