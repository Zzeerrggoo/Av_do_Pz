import './App.css';
import React, {useEffect, useState} from 'react';
import {schedule} from './api/index';

function App() {

  const [auditoryTypes, setAuditoryTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data: {data}} = await schedule.getAuditoryTypes();
      setAuditoryTypes([...data]);
    };

    fetchData();
  }, []);

  return (
      <ul>
        {auditoryTypes.map(
            (item, index) => <li key={index}>{item.typeName}</li>)}
      </ul>
  );
}

export default App;
