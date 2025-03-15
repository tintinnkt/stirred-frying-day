import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ITask extends Document {
  owner: ObjectId;
  subject: ObjectId;
  title: string;
  detail: string;
  deadline: Date;
}

const TaskSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Student", require: true },
  subject: { type: Schema.Types.ObjectId, ref: "Course", require: true },
  title: { type: String, require: true },
  detail: { type: String, require: false },
  deadline: { type: Date, require: false },
});

export default mongoose.model<ITask>("Task", TaskSchema);
