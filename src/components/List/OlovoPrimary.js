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

class Olovo extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: 'O1', density: 7.85 },
      { value: 'O1пч', density: 12 },
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
          onDestiny={this.state.marka}
        /> */}
        <BtnChestigrannik
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
      </>
    );
  }
}
export default Olovo;
