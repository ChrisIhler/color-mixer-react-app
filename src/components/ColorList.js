import React from 'react'

const ColorList = ({ colors }) => {
  const lis = colors.map((color, i) => {
    const style = { backgroundColor: color.value }
    return <li className="list-group-item text-white" key={ i } style={ style }>{ color.name }</li>
  })

  return <ul className="list-group">
    { lis }
  </ul>
}

export default ColorList
