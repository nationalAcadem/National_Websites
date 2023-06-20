import Layout from '@/components/layout';
import React, { useState } from 'react';

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState({
    students: [
      {
        name: 'John',
        attendance: [
          { date: '06-01-2023', status: 'Present' },
          { date: '06-02-2023', status: 'Absent' },
          { date: '06-03-2023', status: 'Present' },
        ],
      },
      {
        name: 'Sarah',
        attendance: [
          { date: '06-01-2023', status: 'Absent' },
          { date: '06-02-2023', status: 'Present' },
          { date: '06-03-2023', status: 'Present' },
        ],
      },
      // Add more students here
    ],
  });

  const getDates = () => {
    const dates = attendanceData.students.reduce((result, student) => {
      student.attendance.forEach(entry => {
        if (!result.includes(entry.date)) {
          result.push(entry.date);
        }
      });
      return result;
    }, []);
    return dates;
  };

  const addDateColumn = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const newDate = `${day}-${month}-${year}`;

    const updatedStudents = attendanceData.students.map(student => {
      return {
        ...student,
        attendance: [...student.attendance, { date: newDate, status: '' }],
      };
    });

    setAttendanceData({
      students: updatedStudents,
    });
  };

  const handleAttendanceChange = (studentIndex, dateIndex, value) => {
    const updatedStudents = [...attendanceData.students];
    updatedStudents[studentIndex].attendance[dateIndex].status = value;

    setAttendanceData({
      students: updatedStudents,
    });
  };

  return (
    <Layout>
      <div className='flex flex-col justify-center'>
        <button
          onClick={addDateColumn}
          className="mb-4 ml-10 mr-auto bg-blue-500 text-white px-4 py-3 font-semibold rounded hover:bg-blue-600"
        >
          Add A Date
        </button>
        <div className="max-w-full mx-10">
          <div className="table-container max-w-full overflow-x-auto">
            <table className="font-bold table w-full border-collapse border">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="sticky left-0 py-2 px-4 bg-blue-500 text-white border">
                    Student
                  </th>
                  {getDates().map((date, index) => (
                    <th
                      key={index}
                      className="py-2 px-4 bg-blue-500 text-white sticky top-0 border"
                    >
                      {date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData.students.map((student, studentIndex) => (
                  <tr key={studentIndex}>
                    <td className="sticky left-0 py-2 px-4 bg-slate-300 border">
                      {student.name}
                    </td>
                    {getDates().map((date, dateIndex) => {
                      const attendanceEntry = student.attendance.find(
                        entry => entry.date === date
                      );
                      const cellStyle = `${
                        attendanceEntry?.status === 'Absent' ? 'bg-red-500' : 'bg-green-500'
                      } py-2 px-4 border${attendanceEntry?.status ? '' : ' bg-gray-800'}`;
                      return (
                        <td
                          key={dateIndex}
                          className={`relative ${cellStyle}`}
                        >
                          <select
                            value={attendanceEntry?.status || ''}
                            onChange={(e) =>
                              handleAttendanceChange(studentIndex, dateIndex, e.target.value)
                            }
                            className="w-full h-full appearance-none bg-transparent border-none text-white "
                          >
                            <option value="" className='text-black'>Select</option>
                            <option value="Absent" className='text-black'>Absent</option>
                            <option value="Present" className="text-black">Present</option>
                          </select>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default AttendanceTable;
