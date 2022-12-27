import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    'addTopic': (state, action) => {
      state.topics[action.payload.id] = {
        ...action.payload,
        quizIds: []
      }
    },
    'affectTopicToQuiz': (state, action) => {
      state.topics[action.payload.topicId]
        .quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
export const {addTopic, affectTopicToQuiz} = topicsSlice.actions;