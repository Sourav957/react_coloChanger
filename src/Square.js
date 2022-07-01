import React from 'react'

const Square = ({colorValue,hexValue,isDarktext}) => {
  return (
    <section
    className='square'
    style={{
        backgroundColor:colorValue,
        color:isDarktext?'black':'white'
    }}
    >
        <div className='color-name'>{colorValue? colorValue:"Empty Value"}
        <br/>
        <div >{hexValue?hexValue : null}</div>
        </div>
        </section>
  )
}


Square.defaultProps = {
    colorValue:"empty color value"
}
export default Square