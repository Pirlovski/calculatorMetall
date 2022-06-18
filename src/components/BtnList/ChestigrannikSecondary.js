import React, { Component } from 'react';
import '../BtnList/ChestigrannikSecondary.modules.css';
class BtnChestigrannik extends Component {
  state = {
    thickness: '',
    width: '',
    length: '',
    diametr: '',
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
    const onDestinyN = Number(this.props.onDestiny);
    const diametrN = Number(this.state.diametr);
    const lengthN = Number(this.state.length);
    const dac = 0.8663;
    const ves = (onDestinyN * (dac * (diametrN * diametrN)) * lengthN) / 1000;
    const parse = ves.toFixed(2);
    return (
      <>
        <div className="ChestigrannikMarc">
          <button type="button" onClick={this.hendleClick}>
            Шестигранник
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

export default BtnChestigrannik;
