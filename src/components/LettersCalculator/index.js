// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    wordCount: 0,
  }

  onChangeInputValue = event => {
    const word = event.target.value
    const count = word.length
    this.setState({
      wordCount: count,
    })
  }

  render() {
    const {wordCount} = this.state
    return (
      <div className="bg-container">
        <div className="count-container">
          <div className="inside-countContainer">
            <h1>Calculate the Letters you enter</h1>
            <label className="label" htmlFor="letterInput">
              Enter the phrase
              <input
                onChange={this.onChangeInputValue}
                placeholder="Enter the phrase"
                id="letterInput"
              />
            </label>
            <p>No.of letters: {wordCount}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
