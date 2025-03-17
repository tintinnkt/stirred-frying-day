import mongoose, { Document, Schema } from "mongoose";

export interface IStudent extends Document {
  studentId: number;
  firstname: string;
  lastname: string;
  year: number;
  department: string;
  email: string;
  password: string;
  isAdmin: boolean;
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
    isAdmin: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Student ||
  mongoose.model<IStudent>("Student", StudentSchema);
