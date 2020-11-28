import React from 'react'
import Card from './Card'

function Content (props) {

return (
  <div className="content">
  {props.database.map((item,index) => {
    return  <Card product={item}
                  key={item.id}
                  setBought={props.setBought}
/>
    })}
  </div>
  )
}

  export default Content;
