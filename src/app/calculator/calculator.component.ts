import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  //kokeilua alhaalla
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: never, secondOp: number){
    switch (op){
      case '+':
        // @ts-ignore
        return this.firstOperand += secondOp;
      case '-':
        // @ts-ignore
        return this.firstOperand -= secondOp;
      case '*':
        // @ts-ignore
        return this.firstOperand *= secondOp;
      case '/':
        // @ts-ignore
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      // @ts-ignore
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }

    // @ts-ignore
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }


  prevValue: string;

  buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  addValue(value: string) {
    if (value == '=') {
      //lasketaan lauseke, esime.
      //eval('2 + 2');
      console.log('lausekkeen arvo on: ' + eval('2+2'));

    }

    try {

    } catch (e: unknown) {


      if (typeof e == "string") {
        console.log(e.toUpperCase());
      }
    }


    console.log('addValue value: ' + value);
  }

  result: string = 'Data Binding';

  constructor() {
    this.result = "";
    this.buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "+", "="];
    this.prevValue = "";
  }

  ngOnInit(): void {
  }

}
