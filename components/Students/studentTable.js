import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FiTrash2 } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';

const StudentTable = ({ reload }) => {

  const [students, setStudents] = useState([]);
  const [canChange, setCanChange] = useState(false);
  const ref = useRef(null);

  const handleDocumentClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setCanChange(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    fecthcStudents();
  }, [reload]);

  const fecthcStudents = () => {
    axios.get('/api/students')
      .then(response => {
        setStudents(response.data)
      })
      .catch(error => {
        console.error('Error retrieving students:', error);
      });
  }

  const handleTableCellEdit = async (item_index, field, value) => {
    setStudents(prevData => {
      const updatedData = [...prevData]
      updatedData[item_index][field] = value;
      axios.put('api/students', students)
      return updatedData
    }
    );
  };

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
    <div ref={ref} className='max-w-full mx-10'>
      <table className="mt-4 border-collapse border table w-full">
        <thead>
          <tr>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Student ID</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Name</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Standard</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Batch</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Mobile Number</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Address</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Fees</th>
            <th className="bg-blue-500 text-white font-bold border border-black px-2 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, item_index) => (
            <tr key={item._id}>
              <td className='border border-black font-semibold px-4'>
                {item._id}
              </td>

              <td className='border border-black font-semibold px-2 py-2'>
                {canChange ? (<input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleTableCellEdit(item_index, 'name', e.target.value)}
                  className="border border-black px-1 py-1"
                />) : (item.name)}

              </td>
              <td className='border border-black font-semibold px-2 py-2'>
              {canChange ? (
                  <select
                    value={item.standard}
                    onChange={(e) => handleTableCellEdit(item_index, 'standard', e.target.value)}
                    className="border border-black px-1 py-1"
                  >
                    <option value="I" className='text-black'>XI</option>
                    <option value="XII" className="text-black">XII</option>
                  </select>
                ) : (item.standard)}
              </td>
              <td className='border border-black font-semibold px-2 py-2'>
                {canChange ? (
                  <select
                    value={item.batch}
                    onChange={(e) => handleTableCellEdit(item_index, 'batch', e.target.value)}
                    className="border border-black px-1 py-1"
                  >
                    <option value="Batch I" className='text-black'>Batch I</option>
                    <option value="Batch II" className="text-black">Batch II</option>
                  </select>
                ) : (item.batch)}
              </td>
              <td className='border border-black font-semibold px-2 py-2'>
                {canChange ? (<input
                  type="text"
                  value={item.mobileNumber}
                  onChange={(e) => handleTableCellEdit(item_index, 'mobileNumber', e.target.value)}
                  className="border border-black px-1 py-1"
                />) : (item.mobileNumber)}
              </td>
              <td className='border border-black font-semibold px-2 py-2'>
                {canChange ? (<input
                  type="text"
                  value={item.address}
                  onChange={(e) => handleTableCellEdit(item_index, 'address', e.target.value)}
                  className="border border-black px-1 py-1"
                />) : (item.address)}
              </td>
              <td className='border border-black font-semibold px-2 py-2'>
                {canChange ? (<input
                  type="text"
                  value={item.fees}
                  onChange={(e) => handleTableCellEdit(item_index, 'fees', e.target.value)}
                  className="border border-black px-1 py-1"
                />) : item.fees}
              </td>
              <td className="border border-black px-2">
                <div className='flex space-x-1'>
                  <button
                    className="flex items-center justify-center rounded-md bg-green-500 hover:bg-blue-600 text-white py-1 px-2 font-semibold"
                    onClick={() => setCanChange(true)}
                  >
                    <FiEdit2 className="h-4 w-4" />
                  </button>
                  <button
                    className="flex items-center justify-center rounded-md bg-red-500 hover:bg-blue-600 text-white py-1 px-2 font-semibold"
                    onClick={() => handleDeleteRow(item._id)}>
                    <FiTrash2 className="font-bold" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
