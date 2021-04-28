import React from 'react'

import {Link} from 'react-router-dom'

const ExpenseListItem= ({id,description,ammount,createAt})=>{

  return  <div>
    
    <Link to={`./edit/${id}`}> <h3>{description}</h3></Link>
    <p>{ammount} - {createAt}</p>
   
    </div>
    }

export default ExpenseListItem