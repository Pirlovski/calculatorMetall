import React, { Component } from 'react';
import '../BtnList/LentaPolosaSecondary.modules.css';

class BtnLentaPolosa extends Component {
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
    const onDestinyN = Number(this.props.onDestiny) * 1000;
    const thicknessN = Number(this.state.thickness) / 1000;
    const widthN = Number(this.state.width) / 1000;
    const ves = onDestinyN * thicknessN * widthN;
    const parse = ves.toFixed(2);
    return (
      <>
        <div className="LentaPolosaMarc">
          <button type="button" onClick={this.hendleClick}>
            Стрічка \ Полоса
          </button>

          {this.state.activ === true && (
            <>
              <label>
                Товщина
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
                Ширина{' '}
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

export default BtnLentaPolosa;
