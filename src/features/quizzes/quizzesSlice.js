import { createSlice } from "@reduxjs/toolkit";
import { affectTopicToQuiz } from "../topics/topicsSlice";

export const createQuiz = (quiz) => {
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(affectTopicToQuiz({
      topicId: quiz.topicId, 
      quizId: quiz.id
    }));
  }
}

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    'addQuiz': (state, action) => {
      state.quizzes[action.payload.id] = {
        ...action.payload
      }
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
export const {addQuiz} = quizzesSlice.actions;