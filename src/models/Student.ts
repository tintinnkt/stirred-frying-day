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

const StudentSchema: Schema = new Schema(
  {
    studentId: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    year: { type: Number, required: false },
    department: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IStudent>("Student", StudentSchema);
