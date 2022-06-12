import React, { Component } from 'react';
class BtnChestigrannik extends Component {
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
    console.log(parse);
    console.log(total);
    console.log(zTotal);

    console.log(zTotal);
    // console.log(typeof this.props.density);
    // console.log('REZULT DENSITY', this.resultDensity);
    // console.log('REZULT Value', this.resultValue);
    ///////////////////////////////////////// jab jab jab ////////////
    // console.log('ЗНАЧЕННЯ З ІМПУТА', this.state.amount);
    // console.log('ПОВНИЙ МАСИВ ОБЖ', this.probTwo);
    ///////////////////////////////////////// jab jab jab ////////////
    return (
      <>
        <form>
          <button type="button" onClick={this.hendleClick}>
            Труба
          </button>

          {this.state.activ === true && (
            <>
              <label>
                Діаметр
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
        </form>
      </>
    );
  }
}

export default BtnChestigrannik;
