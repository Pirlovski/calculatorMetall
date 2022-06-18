import React, { Component } from 'react';
import '../BtnList/KrugSecondary.modules.css';

class BtnKrug extends Component {
  state = {
    diametr: '',
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
    const diametrN = Number(this.state.diametr);
    const lengthN = Number(this.state.length);
    const onDestinyN = Number(this.props.onDestiny);
    const pi = 3.14;
    const ves = onDestinyN * pi * ((diametrN * diametrN) / 4000);
    const parse = ves.toFixed(2);
    return (
      <>
        <div className="KrugMarc">
          <button type="button" onClick={this.hendleClick}>
            Круг
          </button>

          {this.state.activ === true && (
            <>
              <label>
                Діаметр
                <input
                  name="diametr"
                  type="number"
                  placeholder="міліметри"
                  value={this.state.name}
                  onClick={this.hendleChange}
                  onChange={this.hendleChange}
                ></input>
              </label>
              <label>
                Довжина
                <input
                  name="length"
                  type="number"
                  value={this.state.name}
                  onChange={this.hendleChange}
                  placeholder="метри"
                ></input>
              </label>{' '}
            </>
          )}
          {this.state.length !== '' && (
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

export default BtnKrug;
