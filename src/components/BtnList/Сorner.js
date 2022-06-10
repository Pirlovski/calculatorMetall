import React, { Component } from 'react';

class BtnCorner extends Component {
  state = {
    activ: null,
    status: null,
  };
  //
  hendleClick = e => {
    this.setState({ activ: true, status: false });
    if (this.state.status === false) {
      this.setState({ activ: false, status: true });
    }
  };

  render() {
    // console.log(this.renderCard);
    return (
      <>
        <form>
          <button type="button" className="button" onClick={this.hendleClick}>
            Уголок
          </button>

          {this.state.activ === true && (
            <>
              <label>
                Висота
                <input placeholder="мм"></input>
              </label>
              <label>
                Ширина
                <input placeholder="мм"></input>
              </label>
              <label>
                Товщина стінки
                <input placeholder="мм"></input>
              </label>
              <label>
                Довжина
                <input placeholder="м"></input>
              </label>
              <label>
                ВАГА
                <input placeholder="кг"></input>
              </label>
            </>
          )}
        </form>
      </>
    );
  }
}

export default BtnCorner;
