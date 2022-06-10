import React, { Component } from 'react';
import shortid from 'shortid';
import List from '../BtnList/List';
import Corner from '../BtnList/Сorner';

class Stal extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: '08Х13', density: 11 },
      { value: '08Х17Т', density: 12 },
      { value: '08Х18Н10', density: 13 },
      { value: '08Х18Н10Т', density: 14 },
      { value: '09Г2С', density: 15 },
      { value: '10 ', density: 16 },
      { value: '10Х17Н13М2Т', density: 17 },
      { value: '10Х17Н13М3Т', density: 18 },
      { value: '10ХСНД', density: 19 },
      { value: '110Г13Л', density: 20 },
      { value: '12Х13', density: 21 },
      { value: '12Х18Н10Т', density: 112 },
      { value: '12Х1МФ', density: 113 },
      { value: '14Х17Н2', density: 114 },
      { value: '15Х25Т', density: 125 },
      { value: '15Х5М', density: 161 },
      { value: '15ХСНД', density: 127 },
      { value: '20 ', density: 7.85 },
      { value: '20Х13', density: 119 },
      { value: '20Х23Н18', density: 7.8 },
    ],
  };
  peremennaState = this.state.options;
  hendleChangeSelect = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  // den = this.state.options.find(option => option.density);

  // den = this.state.options.filter(option => option.value === this.state.marka);
  mapDensity = this.state.options;
  probnaFunction = options => {
    // const rV = this.resultValue;
    const tpOnMarka = this.state.marka;
    const search = this.probTwo.bind(tpOnMarka);

    console.log(search);
    if (this.state.options === search) {
      this.setState({ density: options.density });
      return options.density;
    }
  };
  numberDensity = Number(this.state.density);
  render() {
    console.log(this.state.marka);
    console.log(typeof this.state.density);
    console.log(typeof this.numberDensity);
    console.log(this.state.options[0].density);
    // console.log(this.den);
    return (
      <>
        {' '}
        <select
          name="marka"
          id="select"
          value={this.state.marka}
          onChange={this.hendleChangeSelect}
        >
          {this.state.options.map(({ value, density }) => (
            <option value={density} key={shortid.generate()}>
              {/* <p>Марка Сталі:{value}</p> / <p>Плотність : {density}</p> */}
              {value}
            </option>
          ))}
        </select>
        <List
          onChange={this.hendleChangeSelect}
          // onMarka={this.state.marka}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <Corner
          onChange={this.hendleChangeSelect}
          // onMarka={this.state.marka}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
      </>
    );
  }
}

export default Stal;
