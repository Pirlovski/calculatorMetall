import React, { Component } from 'react';
import '../BtnList/TrubaSecondary.modules.css';

class BtnTruba extends Component {
  state = {
    diametr: '',
    thickness: '',
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

  render() {
    // const [diametr, thickness, length] = this.state;

    const diametrN = Number(this.state.diametr);
    const thicknessN = Number(this.state.thickness) / 1000;

    const onDestinyN = Number(this.props.onDestiny);
    const piNumber = 3.14;
    const ves = onDestinyN * thicknessN * piNumber * (diametrN - thicknessN);
    const parse = ves.toFixed(2);
    return (
      <>
        <div className="TrubaMarc">
          <button type="button" onClick={this.hendleClick}>
            Труба
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
                Товщина стінки
                <input
                  name="thickness"
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

export default BtnTruba;
