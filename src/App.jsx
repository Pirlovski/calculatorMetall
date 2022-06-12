import React , {Component}  from "react";
import Alum from './components/List/AluminiiPrimary';
import Chugun from "components/List/ChugunPrimary";
import Stal from './components/List/StalPrimary' ; 
import Bronza from "./components/List/BronzaPrimary"
import Latun from "components/List/LatunPrimary ";
import Magniy from "components/List/MagniyPrimary";
import Mid from "components/List/MidPrimary ";
import Nikel from "components/List/NikelPrimary";
import Olovo from "components/List/OlovoPrimary";
import Svinets from "components/List/SvinetsPrimary";
import Titan from "components/List/TitanPrimary";
import Chink from "components/List/ChinkPrimary";
// import s from 'src\AppModule.css'

class App extends Component {
state = {
   status : '' 
  }
  changeState = e => {
   this.setState({  status : e.target.value })
}
render(){
 return(
  <>


<select
 value = {this.state.value} 
 onChange = {this.changeState.bind(this)}>


				<option>СПИСОК</option>
				<option>СТАЛЬ</option>
				<option >Алюміній</option>
				<option>Чугун</option>
				<option>Бронза</option>
				<option>Латунь</option>
				<option>Магній</option>
				<option>Мідь</option>
				<option>Нікель</option>
				<option>Олово</option>
				<option>Свинець</option>
				<option>Титан</option>
				<option>Цинк</option>

</select>

{ this.state.status === 'Алюміній' ? (<Alum value = {this.state.value}  />) : this.state.status === ''}
{ this.state.status === 'Чугун' ? (<Chugun value = {this.state.value}/>) : this.state.status === ''}
{ this.state.status === 'СТАЛЬ' ? (<Stal value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Бронза' ? (<Bronza value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Латунь' ? (<Latun value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Магній' ? (<Magniy value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Мідь' ? (<Mid value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Нікель' ? (<Nikel value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Олово' ? (<Olovo value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Свинець' ? (<Svinets value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Титан' ? (<Titan value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}
{ this.state.status === 'Цинк' ? (<Chink value = {this.props.marka}  onChange = {this.changeState.bind(this)}/>) : this.state.status === ''}



</>
)

}

}
export default App;