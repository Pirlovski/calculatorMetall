import React, { Component } from 'react';
import '../BtnList/BalkaSecondary.modules.css';
class BtnBalka extends Component {
  state = {
    thickness: '',
    width: '',
    length: '',
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
    const array = [
      this.state.thickness,
      this.state.length,
      this.state.width,
      this.state.amount,
    ];
    const total = array.reduce((acc, rec) => acc * rec);
    const zTotal = total * this.props.onDestiny;
    const parse = zTotal.toFixed(2);

    return (
      <>
        <div className="BalkaMarc">
          <button type="button" onClick={this.hendleClick}>
            Балка
          </button>
          <div>
            {' '}
            {this.state.activ === true && (
              <>
                (
                <label>
                  Висота Балки
                  <input
                    name="thickness"
                    type="number"
                    placeholder="міліметри"
                    value={this.state.name}
                    onClick={this.hendleChange}
                    onChange={this.hendleChange}
                  ></input>
                </label>
                <label>
                  Ширина Балки
                  <input
                    name="width"
                    type="number"
                    value={this.state.name}
                    onChange={this.hendleChange}
                    placeholder="метри"
                  ></input>
                </label>
                <label>
                  Товщина перемички{' '}
                  <input
                    name="length"
                    type="number"
                    value={this.state.name}
                    onChange={this.hendleChange}
                    placeholder="метри"
                  ></input>
                </label>
                <label>
                  Товщина полки
                  <input
                    name="amount"
                    type="number"
                    value={this.state.name}
                    onChange={this.hendleChange}
                    placeholder="шт"
                  ></input>
                </label>
                <label>
                  Довжина{' '}
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
            {this.state.amount !== '' && (
              <label>
                ВАГА
                <input
                  value={parse}
                  onChange={this.hendleChange}
                  name="weight"
                  type="text"
                  placeholder="кг"
                >
                  {this.total}
                </input>
              </label>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default BtnBalka;
