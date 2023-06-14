import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const StudentTable = () => {
  // Sample data
  const initialData = [
    { id: 1, name: 'John Doe', standard: '10th', batch: 'A', mobile: '1234567890', address: '123 Street, City', fees: '$100' },
    { id: 2, name: 'Jane Smith', standard: '12th', batch: 'B', mobile: '9876543210', address: '456 Avenue, Town', fees: '$150' },
    // Add more data rows as needed
  ];

  const [data, setData] = useState(initialData);

  const handleTableCellEdit = (id, field, value) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleDeleteRow = (id) => {
    setData(prevData =>
      prevData.filter(item => item.id !== id)
    );
  };

  return (
    <div className="container mt-10 mx-auto">
      <table className="table-auto border-collapse">
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
          {data.map((item) => (
            <tr key={item.id}>
              <td contentEditable onBlur={(e) => handleTableCellEdit(item.id, 'name', e.target.textContent)} className="border border-black px-4 py-2">
                {item.name}
              </td>
              <td contentEditable onBlur={(e) => handleTableCellEdit(item.id, 'standard', e.target.textContent)} className="border border-black px-4 py-2">
                {item.standard}
              </td>
              <td contentEditable onBlur={(e) => handleTableCellEdit(item.id, 'batch', e.target.textContent)} className="border border-black px-4 py-2">
                {item.batch}
              </td>
              <td contentEditable onBlur={(e) => handleTableCellEdit(item.id, 'mobile', e.target.textContent)} className="border border-black px-4 py-2">
                {item.mobile}
              </td>
              <td contentEditable onBlur={(e) => handleTableCellEdit(item.id, 'address', e.target.textContent)} className="border border-black px-4 py-2">
                {item.address}
              </td>
              <td contentEditable onBlur={(e) => handleTableCellEdit(item.id, 'fees', e.target.textContent)} className="border border-black px-4 py-2">
                {item.fees}
              </td>
              <td className="border border-black px-4 py-2">
                <button onClick={() => handleDeleteRow(item.id)}>
                  <FiTrash2 className="text-red-500 font-bold" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
