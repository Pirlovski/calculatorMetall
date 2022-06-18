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

class Mid extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: 'БрКд1', density: 7.85 },
      { value: 'БрНБТ', density: 11 },
      { value: 'БрНХК', density: 11 },
      { value: 'БрХ', density: 11 },
      { value: 'БрХЦр', density: 11 },
      { value: 'М0', density: 11 },
      { value: 'М00', density: 11 },
      { value: 'М00б', density: 11 },
      { value: 'М0б', density: 11 },
      { value: 'М0к', density: 11 },
      { value: 'М1', density: 11 },
      { value: 'М1к', density: 11 },
      { value: 'М1', density: 11 },
      { value: 'М1к', density: 11 },
      { value: 'М1р', density: 11 },
      { value: 'М1ф', density: 11 },
      { value: 'М2', density: 11 },
      { value: 'М3', density: 11 },
      { value: 'М3р', density: 11 },
      { value: 'МК', density: 11 },
      { value: 'МН19', density: 11 },
      { value: 'МНЖ5-1', density: 11 },
      { value: 'МНМц3-12', density: 11 },
      { value: 'МНМц40-1,5', density: 11 },
      { value: 'МНМц-43-0,5', density: 11 },
      { value: 'МНЦ15-20', density: 11 },
      { value: 'НМЖМц28-2,5-1,5', density: 11 },
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
          marka
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
export default Mid;
