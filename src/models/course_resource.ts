import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ICourseResource extends Document {
  course: ObjectId;
  detail: string; //NOTE: What detail?
}

const CourseResource: Schema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: "Course", require: true },
  detail: { type: String, require: true },
});

export default mongoose.model<ICourseResource>(
  "CourseResource",
  CourseResource,
);
