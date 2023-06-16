import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiTrash2 } from 'react-icons/fi';


const StudentTable = ({reload}) => {
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fecthcStudents();
  }, [reload]);

  const fecthcStudents = () =>{
    axios.get('/api/students')
    .then(response => {
      setStudents(response.data);
    })
    .catch(error => {
      console.error('Error retrieving students:', error);
    });
  }

  // const handleTableCellEdit = async (id, field, value) => {
  //   setStudents(prevData =>
  //     prevData.map(item =>
  //       item._id === id ? { ...item, [field]: value } : item
  //     )
  //   );
    
  // };

  const handleDeleteRow = (_id) => {
    axios.delete(`/api/students?id=${_id}`)
      .then(() => {
        fecthcStudents();
      })
      .catch(error => {
        console.error('Error deleting student:', error);
      });
  };

  return (
      <table className="table-auto mt-4 border-collapse">
      <thead>
          <tr>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Name</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Standard</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Batch</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Mobile Number</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Address</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Fees</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr key={item._id}>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleTableCellEdit(item._id, 'name', e.target.value)}
                  className="border border-black px-4 py-2 w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.standard}
                  onChange={(e) => handleTableCellEdit(item._id, 'standard', e.target.value)}
                  className="border border-black px-4 py-2 w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.batch}
                  onChange={(e) => handleTableCellEdit(item._id, 'batch', e.target.value)}
                  className="border border-black px-4 py-2 w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.mobileNumber}
                  onChange={(e) => handleTableCellEdit(item._id, 'mobileNumber', e.target.value)}
                  className="border border-black px-4 py-2 w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.address}
                  onChange={(e) => handleTableCellEdit(item._id, 'address', e.target.value)}
                  className="border border-black px-4 py-2 w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.fees}
                  onChange={(e) => handleTableCellEdit(item._id, 'fees', e.target.value)}
                  className="border border-black px-4 py-2 w-full"
                />
              </td>
              <td className="border border-black px-4 py-2">
                <button onClick={() => handleDeleteRow(item._id)}>
                  <FiTrash2 className="text-red-500 font-bold" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default StudentTable;
