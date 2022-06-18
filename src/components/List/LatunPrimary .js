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

class Latun extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: 'Л59', density: 7.85 },
      { value: 'Л60', density: 12 },
      { value: 'Л63', density: 13 },
      { value: 'Л66', density: 154 },
      { value: 'Л68', density: 155 },
      { value: 'Л70', density: 156 },
      { value: 'Л75', density: 12 },
      { value: 'Л80', density: 13 },
      { value: 'Л85', density: 14 },
      { value: 'Л90', density: 15 },
      { value: 'Л96', density: 16 },
      { value: 'ЛА77-2', density: 17 },
      { value: 'ЛАЖ60-1-1', density: 18 },
      { value: 'ЛЖМц59-1-1', density: 19 },
      { value: 'ЛЖС58-1-1', density: 111 },
      { value: 'ЛК80-3', density: 151 },
      { value: 'ЛМц58-2', density: 152 },
      { value: 'ЛО60-1', density: 151 },
      { value: 'ЛО62-1', density: 152 },
      { value: 'ЛО70-1', density: 153 },
      { value: 'ЛС59-1', density: 154 },
      { value: 'ЛС63-3', density: 155 },
      { value: 'ЛС64-2', density: 156 },
      { value: 'ЛЦ16К4', density: 157 },
      { value: 'ЛЦ23А6Ж3Мц2', density: 158 },
      { value: 'ЛЦ30А3', density: 159 },
      { value: 'ЛЦ38Мц2С2', density: 162 },
      { value: 'ЛЦ40С', density: 345 },
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
export default Latun;
