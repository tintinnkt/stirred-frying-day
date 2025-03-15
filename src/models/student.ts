import mongoose, { Document, Schema } from "mongoose";

export interface IStudent extends Document {
  studentId: number;
  firstname: string;
  lastname: string;
  year: number;
  department: string;
  email: string;
  password: string;
}

const StudentSchema: Schema = new Schema({
  studentId: { type: String, require: true, unique: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  year: { type: Number, require: false },
  department: { type: String, require: false },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

export default mongoose.model<IStudent>("Student", StudentSchema);
