import { Schema, model, models } from 'mongoose';
const mongoose = require('mongoose');

const studentSchema = new Schema({
  _id: {
    type: Number,
    unique: true,
  },
  name: String,
  standard: String,
  batch : String,
  mobileNumber : Number,
  address:String,
  fees : Number,

  installments : [{date:Date , Ammount : Number}],
  tests : [{date : Date, test_name: String , marks:{type : Number , default:0}}],
  attendance: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
      },
    },
  ],
});

studentSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next(); // Skip for existing documents
  }

  try {
    const lastDocument = await this.constructor.findOne({}, {}, { sort: { _id: -1 } });
    const newId = (lastDocument && lastDocument._id) ? lastDocument._id + 1 : 1;
    this._id = newId;
    next();
  } catch (error) {
    next(error);
  }
});

export const Student = mongoose.models.Student || model('Student', studentSchema);

