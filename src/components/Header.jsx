import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Wrapper>
      <div>
        <img src="" alt="cleaning-service"/>
        <div>
          <p>Don't have the time to clean? 
            We are here to match you with the 
            perfect cleaning service.</p>
            <button><Link to="/signup">Find a cleaner</Link></button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`

`

export default Header
