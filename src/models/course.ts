import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  courseId: number;
  courseName: string;
  prerequisite: number[];
  corequisite: number[];
  location: string;
  instructor: string;
  description: string;
}

const CourseSchema: Schema = new Schema({
  courseId: { type: Number, require: true, unique: true },
  courseName: { type: String, require: true },
  prerequisite: [{ type: Number, require: false }],
  corequisite: [{ type: Number, require: false }],
  location: { type: String, require: false },
  instructor: { type: String, require: false },
  description: { type: String, require: false },
});

export default mongoose.model<ICourse>("Course", CourseSchema);
