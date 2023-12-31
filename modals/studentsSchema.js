import { Schema, model, models } from 'mongoose';

const studentSchema = new Schema({
  student: String,
  standard: String,
  batch : String,
  fees : Number,
  installments : [{date:Date , Ammount : Number}],
  tests : [{date : Date, test_name: String , marks:{type : Number , default:0}}],
  attendence : [{
        date:{
            type:Date,
            default:Date.now,
        },
        status: {
            type: String,
        }
    }]
});

const Student = models.Student || model('Student', studentSchema);

export default Student;