import Layout from "@/components/layout"
import Modal from '@/components/Students/new_student';
import StudentTable from "../components/Students/studentTable";

export default function Students() {
  

  return (
    <Layout>
        <Modal/>
        <StudentTable/>
    </Layout>
  )
}