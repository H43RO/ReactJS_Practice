import React from 'react';

function Food(props){
  // props 및 속성 이름를 통해 상위 컴포넌트에서 전달된 정보를 접근 가능
  return <div>
    <h3>I like {props.name}</h3>
    <img src={props.picture}/>
  </div>
}

const foodILike = [
  {
    name:"Kimchi",
    image:"https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg"
  },
  {
    name:"Bibimbap",
    image:"https://minimalistbaker.com/wp-content/uploads/2019/05/Bibimbap-SQUARE-500x500.jpg"
  },
  {
    name:"Pizza",
    image:"https://www.pizzamarumyanmar.com/wp-content/uploads/2019/04/Bulgogi-pizza-2.jpg"
  }
]

function App() {
    return <div>
              {foodILike.map(dish => (
                <Food name={dish.name} picture={dish.image}/>
              ))}
           </div>
    ;
}

export default App;