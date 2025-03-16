import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ITask extends Document {
  owner: ObjectId;
  subject: ObjectId;
  title: string;
  detail: string;
  deadline: Date;
}

const TaskSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  subject: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
  detail: { type: String, required: false },
  deadline: { type: Date, required: false },
});

export default mongoose.model<ITask>("Task", TaskSchema);
