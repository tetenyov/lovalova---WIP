import React from 'react'
import '../scss/user-page.scss'

class ButtonLike extends React.Component {
  state = {
    isLike: false
  }

  buttonClickHandler = () => {
    this.setState(state => ({
      isLike: !state.isLike
    }))
  }

  render() {
    return (
      <button 
        className={ this.state.isLike ? 'user-page__button-like user-page__button-like--active' : 'user-page__button-like' }
        type='button' 
        onClick={ this.buttonClickHandler }
      />
    )
  }
};

export default ButtonLike
