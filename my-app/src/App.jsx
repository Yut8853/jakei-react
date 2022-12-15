import React, { useState,useEffect } from "react";
import ColorfulText from "./components/ColorfulText";

const App = () => {
  console.log('レンダリング')
  const [num, setNum] = useState(0);
  const [faceSwitch, setFaceSwitch] = useState(true);

  const onClickButton = () => {
    setNum(num + 1)
  }
  const onSwitchFace = () => {
    setFaceSwitch(!faceSwitch)
  }
  useEffect(() => {
  if (num % 3 === 0) {
    faceSwitch || setFaceSwitch(true)
  } else {
    faceSwitch && setFaceSwitch(false)
  }
  },[num]);


  return (
    <>
      <h1 style = {{ color: 'red' }}>hello</h1>
      <ColorfulText color='blue'>お元気ですか？</ColorfulText>
      <ColorfulText color='pink'>元気です</ColorfulText>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onSwitchFace}>On/Off</button>
      <p>{num}</p>
      {faceSwitch && <p>( ´ ▽ ` )</p>}
    </>
  )
} 

export default App