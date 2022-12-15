import React from "react";

const ColorfulText = (props) => {
  console.log('カラフル')
  const { color, children} = props
  const contentStyle = {
  color,
  }
  return (
      <p style={contentStyle}>{children}</p>
  )
}

export default ColorfulText