var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { newJoke } from "../variables/constants.js";
import { constructionAnswer } from "./constructionAnswer.js";
import { jokeSelecter } from "./jokeSelecter.js";
export const getNewJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    newJoke.classList.add('notActivate');
    const joke = yield jokeSelecter();
    console.log("🚀 ~ file: script.ts ~ line 21 ~ newJoke.addEventListener ~ joke", joke);
    constructionAnswer(joke);
});
