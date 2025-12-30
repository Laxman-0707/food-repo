import React from 'react'
import "../styles/FilterTile.css"

function FilterTile({ background, name, count, passData }) {

  function handleClick(){
    passData(name)
  }

  return (
    <div className='filterTile' style={{ backgroundColor : background}} onClick={handleClick}>
        <h2>{`${name}`}</h2>
        <div className="items">
            {count >= 1 ?`${count} items` : `${count} item`}
        </div>
    </div>
  )
}

export default FilterTile
