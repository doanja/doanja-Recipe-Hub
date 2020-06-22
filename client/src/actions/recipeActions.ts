import { SET_SEARCHED_RECIPES, RESET_SEARCHED_RECIPES, RecipeActionTypes } from './recipeActionTypes';

export const setSearchedRecipes = (recipes: Recipe): RecipeActionTypes => {
  return {
    type: SET_SEARCHED_RECIPES,
    payload: recipes,
  };
};

export const resetSearchedRecipes = (): RecipeActionTypes => {
  return {
    type: RESET_SEARCHED_RECIPES,
  };
};

//

// import { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from '../actions/recipeActionTypes';

// // TypeScript infers that this function is returning SendMessageAction
// export function sendMessage(newMessage: Message): ChatActionTypes {
//   return {
//     type: SEND_MESSAGE,
//     payload: newMessage,
//   };
// }

// // TypeScript infers that this function is returning DeleteMessageAction
// export function deleteMessage(timestamp: number): ChatActionTypes {
//   return {
//     type: DELETE_MESSAGE,
//     meta: {
//       timestamp,
//     },
//   };
// }
