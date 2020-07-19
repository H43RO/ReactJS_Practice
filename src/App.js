import React from 'react';

function Food(props){
  // props 및 속성 이름를 통해 상위 컴포넌트에서 전달된 정보를 접근 가능
  return <h3>I like {props.fav}</h3>
}

function App() {
    return <div>
             <h1>Hello</h1>
             <Food fav="Kimchi"/>
             <Food fav="Pizza"/>
             <Food fav="Hamburger"/>
             <Food fav="Ramen"/>
           </div>
    ;
}

export default App;