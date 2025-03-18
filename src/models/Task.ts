import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ITask extends Document {
  owner: ObjectId;
  course: ObjectId;
  title: string;
  detail: string;
  isDone: boolean;
  deadline: Date;
}

const TaskSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: false },
  title: { type: String, required: true },
  isDone: { type: Boolean, required: true },
  detail: { type: String, required: false },
  deadline: { type: Date, required: false },
});

export default mongoose.models.Task ||
  mongoose.model<ITask>("Task", TaskSchema);
