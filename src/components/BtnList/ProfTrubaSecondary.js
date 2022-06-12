import React, { Component } from 'react';
class BtnProfilna extends Component {
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

  // resultFn = e => {
  //   const [thickness, length, width, amount] = this.state;
  //   const array = [thickness, length, width, amount];
  //   const total = array.reduce((acc, rec) => acc * rec);
  //   this.setState({ weight: total });
  //   console.log(total);
  //   return total;
  // };

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
    // console.dir(this.resultDensity);
    // console.log('ВИБРАНИЙ ЕЛЕМЕНТ В ІНПУТІ', this.props.onMarka);
    // console.log('МАСИВ НАЗВ МЕТАЛА', this.resultValue);

    console.log(zTotal);
    // console.log(typeof this.props.density);
    // console.log('REZULT DENSITY', this.resultDensity);
    // console.log('REZULT Value', this.resultValue);
    ///////////////////////////////////////// jab jab jab ////////////
    // console.log('ЗНАЧЕННЯ З ІМПУТА', this.state.amount);
    // console.log('ПОВНИЙ МАСИВ ОБЖ', this.probTwo);
    ///////////////////////////////////////// jab jab jab ////////////
    const { amount } = this.state;
    return (
      <>
        <form>
          <button type="button" onClick={this.hendleClick}>
            Труба профільна
          </button>

          {this.state.activ === true && (
            <>
              (
              <label>
                Висота
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
                  name="length"
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
                {this.total}
              </input>
            </label>
          )}
        </form>
      </>
    );
  }
}

export default BtnProfilna;
