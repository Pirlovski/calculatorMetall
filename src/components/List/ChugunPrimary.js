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
import '../List/ChugunPrimary.modules.css';
class Chugun extends Component {
  state = {
    marka: '',
    density: '',
    options: [
      { value: 'CЧ10', density: 7.85 },
      { value: 'CЧ15', density: 12 },
      { value: 'БСЧ20', density: 13 },
      { value: 'СЧ25', density: 14 },
      { value: 'СЧ35', density: 15 },
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
        <div className="List">
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
          <BtnBalka
            onChange={this.hendleChangeSelect}
            onOpt={this.mapDensity}
            onDestiny={this.state.marka}
          />
          <BtnChestigrannik
            onChange={this.hendleChangeSelect}
            onOpt={this.mapDensity}
            onDestiny={this.state.marka}
          />
        </div>
      </>
    );
  }
}
export default Chugun;
