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
// import styled from '@emotion/styled'
import "./App.modules.css"
// import "./App.css";
// src\App.modules.css
class App extends Component {
state = {
   status : '' ,
   button : false
  }
 
  changeState = e => {
   this.setState({  status : e.target.textContent })
   console.log( e.target.textContent)
}
buttonClick = e => {
	this.setState({button: true})
	 
 
}
markup = 
<div className="ListMarka"
 value = {this.state.value} 
 onChange = {this.changeState.bind(this)}>
	<ul className="List">
		<li>				<button className="buttonList" onClick = {() => {<Alum/>}} value = {this.value}  onChange = {this.changeState.bind(this)} >Алюміній</button>
</li>
		<li>				<button className="buttonList" onClick = {this.changeState.bind(this)}>Чугун</button>
</li>
		<li>				<button className="buttonList" onClick = {this.changeState.bind(this)}>Бронза</button>
</li>
		<li>				<button className="buttonList">Латунь</button>
</li>
		<li>				<button className="buttonList">Магній</button>
</li>
		<li>				<button className="buttonList">Мідь</button>
</li>
		<li>				<button className="buttonList">Нікель</button>
</li>
		<li>				<button className="buttonList">Олово</button>
</li>
		<li>				<button className="buttonList">Свинець</button>
</li>
		<li>				<button className="buttonList">Титан</button>
</li>
		<li>				<button className="buttonList">Цинк</button>
</li>
	</ul>



</div>

render(){
	console.log(this.state.status.value)
	// console.log(this.button.textContent)
 return(

  <>
<div><button className='primaryButton' onClick={this.buttonClick}>Click Me</button>
{this.state.button ? this.markup : null}</div>



{/* <select
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

</select> */}

<div className="app" style={{backgroundImage: `url(https://klike.net/uploads/posts/2020-04/1587719791_1.jpg);

)`}}>
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

</div>


</>
)

}

}
export default App;