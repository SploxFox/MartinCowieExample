import { compAFunc } from "../../ComponentA"

export function compBFunc() {
    compAFunc();
    console.log("Ran component B!");
}