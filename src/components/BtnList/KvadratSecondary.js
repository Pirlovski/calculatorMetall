import React, { Component } from 'react';
import '../BtnList/KvadratSecondary.modules.css';

class BtnKvadrat extends Component {
  state = {
    length: '',

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
    const lengthN = Number(this.state.length);
    const widthN = Number(this.state.width);
    const onDensityN = Number(this.props.onDestiny);

    const ves = (widthN * widthN * onDensityN * lengthN) / 1000;
    const parse = ves.toFixed(2);

    return (
      <>
        <div className="KvadratMarc">
          <button type="button" onClick={this.hendleClick}>
            Квадрат
          </button>

          {this.state.activ === true && (
            <>
              (
              <label>
                Ширина
                <input
                  name="width"
                  type="number"
                  value={this.state.name}
                  onChange={this.hendleChange}
                  placeholder="міліметри"
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
              </label>
              ){' '}
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

export default BtnKvadrat;
