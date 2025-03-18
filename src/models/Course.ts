import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  courseId: number;
  courseName: string;
  prerequisite: Array<number>;
  corequisite: Array<number>;
  location: string;
  instructor: string;
  description: string;
}

const CourseSchema: Schema = new Schema({
  courseId: { type: Number, required: true, unique: true },
  courseName: { type: String, required: true },
  prerequisite: [{ type: Number, required: false }],
  corequisite: [{ type: Number, required: false }],
  location: { type: String, required: false },
  instructor: { type: String, required: false },
  description: { type: String, required: false },
});

export default mongoose.models?.Course ||
  mongoose.model<ICourse>("Course", CourseSchema);
