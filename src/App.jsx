import React , {Component}  from "react";
import Alum from './components/List/Aluminii';
import Chugun from "components/List/Chugun";
// import Wrapper from "./components/WrapperLists/";
import BtnList from 'components/BtnList/List';
import BtnCorner from 'components/BtnList/Сorner';
import Stal from './components/List/Stal'

// import alert from "alert";
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


<select value = {this.state.value}  onChange = {this.changeState.bind(this)}>

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


 {/* <BtnCorner onChange = {this.changeState }/> */}

<button>Труба</button>
<button>Круг</button>
<button>Профільна труба</button>
<button>Квадрат</button>
<button>Швеллер</button>
<button>Лента\Полоса</button>
<button>Балка</button>
<button>Шестигранник</button>
</>
)

}

}
export default App;