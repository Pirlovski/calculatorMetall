import React, { Component } from 'react';
import shortid from 'shortid';
import BtnList from '../BtnList/ListSecondary';
import BtnCorner from '../BtnList/СornerSecondary';
import BtnTruba from '../BtnList/TrubaSecondary';
import BtnKrug from '../BtnList/KrugSecondary';
import BtnProfilna from 'components/BtnList/ProfTrubaSecondary';
import BtnKvadrat from 'components/BtnList/KvadratSecondary';
import BtnChveller from 'components/BtnList/ChvellerSecondary';
import BtnLentaPolosa from 'components/BtnList/LentaPolosaSecondary';
import BtnBalka from 'components/BtnList/BalkaSecondary';
import BtnChestigrannik from 'components/BtnList/ChestigrannikSecondary';

class Alum extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: '1420', density: 7.85 },
      { value: 'A5', density: 12 },
      { value: 'A85', density: 13 },
      { value: 'A95', density: 14 },
      { value: 'A97', density: 15 },
      { value: 'A99 ', density: 16 },
      { value: 'A999', density: 17 },
    ],
  };
  hendleChangeSelect = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  mapDensity = this.state.options;

  numberDensity = Number(this.state.density);
  render() {
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
        <BtnList
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnCorner
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnTruba
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnKrug
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnProfilna
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnKvadrat
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnChveller
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnLentaPolosa
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        {/* <BtnBalka
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}        /> */}
        <BtnChestigrannik
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
      </>
    );
  }
}
export default Alum;
