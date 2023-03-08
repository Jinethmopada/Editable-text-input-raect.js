import {Component} from 'react'
import './index.css'

class Text extends Component {
  state = {text: '', buttonClick: false}

  onChangeEditText = event => {
    this.setState({text: event.target.value})
  }

  onClickChangeBtnValue = () => {
    this.setState(prevState => ({buttonClick: !prevState.buttonClick}))
  }

  render() {
    const {text, buttonClick} = this.state
    const buttonText = buttonClick ? 'Edit' : 'Save'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="btn-container">
            {buttonClick ? (
              <p className="input-value">{text}</p>
            ) : (
              <input
                type="text"
                onChange={this.onChangeEditText}
                value={text}
                className="input-value"
              />
            )}
            <button
              type="button"
              className="btn"
              onClick={this.onClickChangeBtnValue}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Text
