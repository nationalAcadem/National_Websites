import Layout from "@/components/layout"
import Modal from '@/pages/students/new_student';
import { useState } from "react";

export default function Students() {
  let [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className='text-black flex justify-between'>
          <button onClick={()=>setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add a New Student
          </button>
        {isModalOpen && <Modal closeModal={()=>setIsModalOpen(false)} />}
      </div>
    </Layout>
  )
}