import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
    rating: 5
  },
  {
    id:2,
    name:"Bibimbap",
    image:"https://minimalistbaker.com/wp-content/uploads/2019/05/Bibimbap-SQUARE-500x500.jpg",
    rating: 4.3
  },
  {
    id:3,
    name:"Pizza",
    image:"https://www.pizzamarumyanmar.com/wp-content/uploads/2019/04/Bulgogi-pizza-2.jpg",
    rating: 3.4
  }
]

function Food(props){
  // props 및 속성 이름를 통해 상위 컴포넌트에서 전달된 정보를 접근 가능
  return <div>
    <h2>I like {props.name}</h2>
    <h4>{props.rating}/5</h4>
    <img src={props.picture} alt={props.name}/>
  </div>
}

//인식을 위해 꼭 propTypes라고 이름을 지어야함
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
    return <div>
              {foodILike.map(dish=>
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
                )}
           </div>
    ;
}

export default App;