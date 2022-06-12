import React, { Component } from 'react';
import shortid from 'shortid';
import BtnList from '../BtnList/ListSecondary';
import BtnCorner from '../BtnList/СornerSecondary';
import BtnTruba from '../BtnList/TrubaSecondary';
import BtnKrug from '../BtnList/KrugSecondary';
import BtnProfilna from 'components/BtnList/ProfTrubaSecondary';
import BtnKvadrat from 'components/BtnList/KvadratSecondary';
import BtnChveller from 'components/BtnList/ChvellerSecondary';
import BtnLentaPolosa from 'components/BtnList/LentaPolosa';
import BtnBalka from 'components/BtnList/BalkaSecondary';
import BtnChestigrannik from 'components/BtnList/ChestigrannikSecondary';

class Bronza extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: 'БрА5', density: 11 },
      { value: 'БрА7', density: 12 },
      { value: 'БрА9Ж3Л', density: 13 },
      { value: 'БрА9Ж4', density: 14 },
      { value: 'БрАЖН10-4-4', density: 15 },
      { value: 'БрАМц9-2', density: 16 },
      { value: 'БрБ2', density: 17 },
      { value: 'БрБ2.5', density: 18 },
      { value: 'БрКМц3-1', density: 19 },
      { value: 'БрКН1-3', density: 20 },
      { value: 'БрО10', density: 21 },
      { value: 'БрО10Ф1', density: 112 },
      { value: 'БрО10Ц2', density: 113 },
      { value: 'БрО5Ц5С5', density: 114 },
      { value: 'БрО8С12', density: 125 },
      { value: 'БрОФ6.5-0.15', density: 161 },
      { value: 'БрОЦ4-3', density: 127 },
      { value: 'БрОЦС4-4-2.5 ', density: 7.85 },
      { value: 'БрОЦС4-4-4', density: 119 },
      { value: 'БрС30', density: 7.8 },
      { value: 'БрХ1', density: 7.8 },
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
        ;
        <BtnList
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.marka}
        />
        <BtnCorner
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnTruba
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnKrug
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnProfilna
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnKvadrat
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnChveller
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnLentaPolosa
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnBalka
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
        <BtnChestigrannik
          onChange={this.hendleChangeSelect}
          onOpt={this.mapDensity}
          onDestiny={this.state.density}
        />
      </>
    );
  }
}
export default Bronza;
