import * as actionTypes from "./actionTypes";

// Declaration of the initial state
const initialState = {
  counter: 0,
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
};

// Reducer function to set state and handle state changes
export const reducerCounter = (state = initialState, action) => {
  if (action.type === "INCERMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECERMENT") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "RESET") {
    return { counter: 0 };
  }
  switch (action.type) {
    case actionTypes.ADD_ARTICLE: {
      const { title, body } = action.article;
      const newArticle = {
        id: Math.random(),
        title,
        body,
      };
      return {
        ...state,
        articles: [...state.articles, newArticle],
      };
    }
    default:
      return state;
  }
};
