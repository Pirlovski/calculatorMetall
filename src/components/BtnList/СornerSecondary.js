import React, { Component } from 'react';
import '../BtnList/СornerSecondary.modules.css';

class BtnCorner extends Component {
  state = {
    thickness: '',
    width: '',
    length: '',
    marka: ' ',
    activ: null,
    status: null,
    density: '',
    weight: '',
  };
  //
  hendleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  hendleClick = e => {
    this.setState({ activ: true, status: false });
    if (this.state.status === false) {
      this.setState({ activ: false, status: true });
    }
  };

  render() {
    // const [thickness, width, length] = this.state;

    const thicknessN = Number(this.state.thickness);
    const widthN = Number(this.state.width) / 1000;
    const lengthN = Number(this.state.length);
    const onDestinyN = Number(this.props.onDestiny);

    const Two = 2;

    const ves = Two * widthN * thicknessN * onDestinyN * lengthN;
    const parse = ves.toFixed(2);

    return (
      <>
        <div className="CornerMarc">
          <button type="Button" onClick={this.hendleClick}>
            Уголок
          </button>
          <div>
            {this.state.activ === true && (
              <>
                <label>
                  Висота
                  <input
                    name="height"
                    placeholder="мм"
                    type="number"
                    value={this.state.name}
                    onClick={this.hendleChange}
                    onChange={this.hendleChange}
                  ></input>
                </label>
                <label>
                  Ширина
                  <input
                    name="width"
                    placeholder="мм"
                    type="number"
                    value={this.state.name}
                    onClick={this.hendleChange}
                    onChange={this.hendleChange}
                  ></input>
                </label>
                <label>
                  Товщина стінки
                  <input
                    name="thickness"
                    placeholder="мм"
                    type="number"
                    value={this.state.name}
                    onClick={this.hendleChange}
                    onChange={this.hendleChange}
                  ></input>
                </label>
                <label>
                  Довжина
                  <input
                    name="length"
                    placeholder="м"
                    type="number"
                    value={this.state.name}
                    onClick={this.hendleChange}
                    onChange={this.hendleChange}
                  ></input>
                </label>
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
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default BtnCorner;
