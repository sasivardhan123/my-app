import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
const Itemlist = [
  {
    name: 'Nike men shoes',
    disc: 'Nike size 9 shoes',
    price: '99$',
    gender: 'male',
    image: './assets/male-shoes.jpeg'
  },
  {
    name: 'Shirts',
    disc: 'puma Medium size sports shirt',
    price: '9$',
    gender: 'male',
    image: ''
  },
  {
    name: "Levi's",
    disc: "Levi's 32 size slim fit pants",
    price: '$27',
    gender: 'male',
    image: ''
  },
  {
    name: 'Nike shoes',
    disc: 'Nike size 9 shoes',
    price: '99$',
    gender: 'female',
    image: ''
  },
  {
    name: 'Shirts',
    disc: 'puma Medium size sports shirt',
    price: '9$',
    gender: 'female',
    image: ''
  },
  {
    name: "Levi's",
    disc: "Levi's 32 size slim fit pants",
    price: '$27',
    gender: 'female',
    image: ''
  },
  {
    name: 'Apple charger',
    disc: 'Apple lightening cable 30W charger',
    price: '50$',
    gender: 'electronics',
    image: ''
  }
]
function App() {
  const [gender,setGender] = useState('male')
  const truelist = Itemlist.filter(item =>
    item.gender === gender
  );
  const list = truelist.map(item=>
    <Item Name={item.name} Disc={item.disc} Price={item.price} Gender={item.gender} Image={item.image}/>
  );
  const changeHandler = (e)=>{
    setGender(e.target.value)
    console.log(e.target.value)
  }
 
  return (
    <div className="App">
    <Header/>
    <div>
      <label htmlFor="gender">Select Gender</label>
      <select name="gender" id="gender" onChange={(e)=>changeHandler(e)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="electronics">Electronics</option>
      </select>
    </div>
    {list}
    </div>
  );
}

export default App;
