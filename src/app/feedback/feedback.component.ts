import { Component, OnInit } from '@angular/core';
import {Question} from "./question";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  title = 'Anna palautetta';

  //private locator = (g: Question, title: string) => g.title == title;

  /*constructor(private  qData: any) {
    this.questions = this.qData.getQuestions();
  }
*/
  ngOnInit(): void {
  }



  list: Array<number> = [1, 2, 3];

  questions: Array<Question> = [new Question ('kysymysA'), new Question ('kysymysB') ]

  setFeedback (event: any, q:Question) {

    console.log(event.value);
    console.log(q.question);
    //q.setAnswer(event.Value);

    //interface "joku sana" {
    // name: string;
    // size: "small";
    // medium;
    // large;
    // }

    //const "joku Array: joku sana[]" = [
     // {name: "", size: "small"},
     // {name: "", size: "medium"},
     // {name: "", size: "large"},
    //];

    //onInputChange(event: any)
    event.value;

  //message: Array<Message> = [];
 // messages: Array<Message> = new Array();

  }


}
