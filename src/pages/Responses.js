import React,{useState, useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import ResponsesTable from '../components/ResponsesTable';
import { getCollection, yepp } from '../helpers/firebase';

export default function Responses() {
  const [responses, setResponses] = useState([]);
  // setResponses(getCollection('users'));
  async function getResponses(){
    setResponses(await getCollection('users'));
  }
  useEffect(() => {
    getResponses();
  }, []);

  return (
  <MainLayout pageName="Responses">
    <div className="container-fluid">
      <ResponsesTable responses={responses} />
    </div>
  </MainLayout>
  );
}
