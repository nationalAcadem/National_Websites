import connectMongo from '@/lib/dbConnection';
import { Student } from '@/modals/studentsSchema';

connectMongo();

export default async function handler(req, res) {
    const { id } = req.query;
    
    if (req.method === 'POST') {
      try {
        const student = await Student.findById(id);
        
        if (!student) {
          return res.status(404).json({ error: 'Student not found' });
        }
        
        student.attendance.push({ status: 'Attended' });
        await student.save();
        
        res.status(200).json({ message: 'Attendance marked successfully' });
      } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ error: 'Server error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }