import React, { Component } from "react";
import "./index.css";

export default class Calculator extends Component {

  state = {
    input1: null,
    input2: null,
    operator: '+',
    result: null,
    count: 0
  }
  
  handleClick = (operator) => {
    const { input1, input2, count } = this.state
    this.setState({ operator: operator })
    if (input1 && input2) {
      const num1 = Number(input1)
      const num2 = Number(input2)

      switch(operator) {
        case '+':
          this.setState({result: num1 + num2})
          break;
        case '-':
          this.setState({result: num1 - num2})
          break;
        case '*':
          this.setState({result: num1 * num2})
          break;
        case '/':
          this.setState({result: num1 / num2})
          break;
      }

      this.setState({ count: count + 1 })
    }
  }

  handleReset = () => {
    this.setState({input1: null, input2: null, operator: '+', result: null})
  }

  render() {
    const { operator, result, count, input1, input2 } = this.state
    return (
      <div className="layout-column align-items-center">
        <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {count}</div>
        <div className="card">
          
          <section className="card-text">
            <div className="layout-row justify-content-around align-items-center mt-40">
              <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                    name="input1" value={input1 || ''} onChange={(e) => this.setState({input1: e.target.value})}/>
              <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
              <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                    placeholder="Eg: 2" value={input2 || ''} onChange={(e) => this.setState({input2: e.target.value})}/>
            </div>

            <div className="layout-row justify-content-around mt-30">
              <button className="operationFont" type="submit" data-testid="addButton" onClick={() => this.handleClick('+')}>+</button>
              <button className="operationFont" type="submit" data-testid="subtractButton" onClick={() => this.handleClick('-')}>-</button>
              <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={() => this.handleClick('*')}>*</button>
              <button className="operationFont" type="submit" data-testid="divideButton" onClick={() => this.handleClick('/')}>/</button>
            </div>

            <div className="layout-row justify-content-between align-items-center mt-30">
              <button type="reset" data-testid="resetButton" className="outline danger" onClick={this.handleReset}>Reset</button>
              <div className="layout-row justify-content-center align-items-center result-container">
                {(result || result === 0) && <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>}
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  }
}