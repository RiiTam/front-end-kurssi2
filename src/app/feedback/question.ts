import {CONSTRUCTOR} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";

export class Question {
  questioning: string;

  constructor(message: string) {
    this.questioning = message;
  }

  question() {
    return "Hello, " + this.questioning;
  }
}

/*let questioner = new Questioner("world");

setAnswer(value: number) {
  if ()
    this.answer = "";

  else if ()
    this.answer = "ok";

  else
}
*/

//question.string, -->
//answer.string,
//
//CONSTRUCTOR (value:string) {
  //this.question = value,
//this.answer"Not available",
//}
