import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

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
          <tr></tr>
        </tbody>
      </Table>
    )
}

export default Show;