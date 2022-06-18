import React, { Component } from 'react';
import '../BtnList/ProfTrubaSecondary.modules.css';

class BtnProfilna extends Component {
  state = {
    height: '',
    width: '',
    thickness: '',
    amount: '',
    activ: null,
    status: null,
    density: '',
    weight: '',
  };
  hendleClick = e => {
    this.setState({ activ: true, status: false });
    if (this.state.status === false) {
      this.setState({ activ: false, status: true });
    }
  };
  hendleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  prob = Object.values(this.props.onOpt);
  probTwo = Object.values(this.prob);
  resultDensity = this.probTwo.map(el => el.density);
  resultValue = this.probTwo.map(el => el.value);

  render() {
    // const parse = zTotal.toFixed(2);
    const onDestinyN = Number(this.props.onDestiny);
    const heightN = Number(this.state.height);
    const widthN = Number(this.state.width);
    const thicknessN = Number(this.state.thickness);
    const amountN = Number(this.state.amount);
    const number = 0.0157;
    const ves =
      (onDestinyN / 7.85) *
      number *
      thicknessN *
      (heightN + widthN - 2.86 * thicknessN) *
      amountN;
    const parse = ves.toFixed(2);
    const { amount } = this.state;
    return (
      <>
        <div className="ProfTrubaMarc">
          <button type="button" onClick={this.hendleClick}>
            Труба профільна
          </button>

          {this.state.activ === true && (
            <>
              (
              <label>
                Висота
                <input
                  name="height"
                  type="number"
                  placeholder="міліметри"
                  value={this.state.name}
                  onClick={this.hendleChange}
                  onChange={this.hendleChange}
                ></input>
              </label>
              <label>
                Ширина
                <input
                  name="width"
                  type="number"
                  value={this.state.name}
                  onChange={this.hendleChange}
                  placeholder="метри"
                ></input>
              </label>
              <label>
                Товщина стінки
                <input
                  name="thickness"
                  type="number"
                  value={this.state.name}
                  onChange={this.hendleChange}
                  placeholder="метри"
                ></input>
              </label>
              <label>
                Кількість
                <input
                  name="amount"
                  type="number"
                  value={this.state.name}
                  onChange={this.hendleChange}
                  placeholder="шт"
                ></input>
              </label>
              ){' '}
            </>
          )}
          {amount !== '' && (
            <label>
              ВАГА
              <input
                value={parse}
                onChange={this.hendleChange}
                name="weight"
                type="text"
                placeholder="кг"
              >
                {this.ves}
              </input>
            </label>
          )}
        </div>
      </>
    );
  }
}

export default BtnProfilna;
