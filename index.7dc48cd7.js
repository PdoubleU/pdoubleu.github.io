var e=class{constructor(e,t){this.previousOperandTextElement=e,this.currentOperandTextElement=t,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}isInputTooLong(e){return e.replaceAll(/\s/g,"").length>7}appendSymbol(){return this.currentOperand.length?"-"===this.currentOperand?(this.currentOperand="",this.updateDisplay()):void 0:(this.currentOperand="-",this.updateDisplay())}appendNumber(e){this.isInputTooLong(this.currentOperandTextElement.innerText)||","===e&&this.currentOperand.includes(",")||(this.currentOperand=this.currentOperand.toString()+e.toString())}chooseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}compute(){let e;const t=parseFloat(this.previousOperand?.replace(/,/,".")),r=parseFloat(this.currentOperand?.replace(/,/,"."));if(!isNaN(t)&&!isNaN(r)){switch(this.operation){case"+":e=t+r;break;case"-":e=t-r;break;case"x":e=t*r;break;case"/":e=t/r;break;default:return}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}getDisplayNumber(e){if("-"===e)return e;let t;const r=e.toString(),n=/\./.test(r)?parseFloat(r.split(".")[0]):parseFloat(r.split(",")[0]),a=/\./.test(r)?r.split(".")[1]:r.split(",")[1];return t=isNaN(n)?"":n.toLocaleString("pl-PL",{maximumFractionDigits:0}),t.replaceAll(/\s/g,"").length>10?parseInt(t.replaceAll(/\s/g,"")).toExponential(4).replace(/\./,","):n.toLocaleString().length+a?.toLocaleString().length>10?parseFloat(`${t}.${a}`).toExponential(4).toString().replace(/\./,","):null!=a?`${t},${a}`:t}updateDisplay(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`:this.previousOperandTextElement.innerText=""}};const t=document.querySelectorAll("[data-number]"),r=document.querySelectorAll("[data-operation]"),n=document.querySelector("[data-equals]"),a=document.querySelector("[data-clear]"),i=document.querySelector("[data-negative]"),s=new e(document.querySelector("[data-previous-operand]"),document.querySelector("[data-current-operand]"));t.forEach((e=>{e.addEventListener("click",(()=>{s.appendNumber(e.innerText),s.updateDisplay()}))})),r.forEach((e=>{e.addEventListener("click",(()=>{s.chooseOperation(e.innerText),s.updateDisplay()}))})),n.addEventListener("click",(()=>{s.compute(),s.updateDisplay()})),a.addEventListener("click",(()=>{s.clear(),s.updateDisplay()})),i.addEventListener("click",(()=>s.appendSymbol()));
//# sourceMappingURL=index.7dc48cd7.js.map
