import { Schema, model } from 'mongoose';

const QuestionSchema = new Schema({
    id: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
},
    { collection: "questions" }
)

export const QuestionModel = model('Question', QuestionSchema);