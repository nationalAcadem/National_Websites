import Layout from "@/components/layout"
import Modal from '@/components/Students/new_student';
import StudentTable from "../components/Students/studentTable";
import { useState } from "react";


export default function Students() {
  const [reloadFetchData, setReloadFetchData] = useState(false);

  const handleDataPosted = () => {
    setReloadFetchData(true);
  };

  

  return (
    <Layout>
      <div className="fex fex-col justify-center">
        <Modal onDataPosted={handleDataPosted}/>
        <StudentTable reload={reloadFetchData}/>
      </div>
    </Layout>
  )
}