const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  answers: {
    type: [
      new mongoose.Schema({
        answer: String,
        isCorrect: Boolean
      })
    ],
    required: true
  }
});

module.exports = Question = mongoose.model('Question', QuestionSchema);
