import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ICourseResource extends Document {
  course: ObjectId;
  detail: string; //NOTE: What detail?
}

const CourseResource: Schema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  detail: { type: String, required: true },
});

export default mongoose.models.CourseResource ||
  mongoose.model<ICourseResource>("CourseResource", CourseResource);
