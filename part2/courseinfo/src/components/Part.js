import React from "react"

const Part = ({ partInfo }) => {
    return (
      <p>
        {partInfo.name} {partInfo.exercises}
      </p>    
    )
  }

export default Part;