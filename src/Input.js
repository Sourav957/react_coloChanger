import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue,setColorValue,setHexValue,isDarktext,setIsDarkText}) => {
    console.log(colorValue)
    
    
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='color'>Add Color Value</label>
        <input
        autoFocus
        type="text"
        placeholder='Add Color'
        value={colorValue}
        onChange={(e)=>{
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }
        }/>
        <button 
        type='button'
        onClick={()=>
            setIsDarkText(!isDarktext)
        }>
            toggle text color
        </button>
    </form>
  )
}

export default Input