import { buttonResponse, newJoke } from "../variables/constants.js";
export const animationsSecondPart = () => {
    newJoke.classList.remove('buttonToLeft');
    buttonResponse.classList.remove('buttonToRight');
    newJoke.classList.add('buttonToLeftReverse');
    buttonResponse.classList.add('buttonToRightReverse');
};
