import { shoes } from "../shoeData";

export const DISPLAY_SHOES = "DISPLAY_SHOES";

export const displayShoes = () => {
  return {
    type: DISPLAY_SHOES, // display the shoes
    payload: shoes // update shoes on state
  };
};
