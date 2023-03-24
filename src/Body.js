import React from 'react'
import FilterBar from './FilterBar'
import RestaurantContainer from './RestaurantContainer'

function Body() {
  return (
    <div className='max-w-[1250px] min-w-[1250px] m-auto'>
        {/* Filter Bar Goes Here */}
        <FilterBar />
        <RestaurantContainer />
    </div>
  )
}

export default Body