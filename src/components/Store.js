import React, { createContext, useReducer } from "react";
export const StoreContext = createContext({});
const initialState = { value: "", genre: "" };
function reducer(state, action) {
  switch (action.type) {
    case "sortExtend":
      return { value: "extended", action };
    case "sortNormal":
      return { value: "normal", action };
    case "action":
      return { genre: 28, action };
    case "adventure":
      return { genre: 12, action };
    case "animation":
      return { genre: 16, action };
    case "comedy":
      return { genre: 35, action };
    case "crime":
      return { genre: 80, action };
    case "documentary":
      return { genre: 99, action };
    case "drama":
      return { genre: 18, action };
    case "family":
      return { genre: 10751, action };
    case "fantasy":
      return { genre: 14, action };
    case "history":
      return { genre: 36, action };
    case "horror":
      return { genre: 27, action };
    case "music":
      return { genre: 10402, action };
    case "mystery":
      return { genre: 9648, action };
    case "romance":
      return { genre: 10749, action };
    case "thriller":
      return { genre: 53, action };
    case "western":
      return { genre: 37, action };
    default:
      return state;
  }
}

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
