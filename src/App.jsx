import React from 'react'
import "./App.css"
import Card from './Component/Card'

const App = () => {
  let user =[
    {
      heading :"hello",
      Description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      Src:"https://cdn.pixabay.com/photo/2023/10/30/01/31/duck-8351436_640.jpg",
      Read:"Explore",
    },
    {
      heading :"There",
      Description:" it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      Src:"https://cdn.pixabay.com/photo/2024/09/25/14/32/lighthouse-9073925_640.png",
      Read:"Explore More",
    }

  ]
  return (
    <div>
   <div className='flex gap-2 justify-center m-6'>
  {user.map((elem, index) => (
    <Card key={index} Heading={elem.heading} Src={elem.Src} Description={elem.Description} Read={elem.Read}/>
  ))}
</div>

    </div>
  )
}

export default App