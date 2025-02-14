import React from 'react'
import { Grid2 } from '@mui/material'
import LeftHome from './LeftHome/LeftHome'
import CenterHome from './CenterHome/CenterHome'
import RightHome from './RightHome/RightHome'

const HomePage = () => {
  return (
    <div className='container'>
        <Grid2 container gap={3}>
<Grid2 size={{xs:12, sm:12, md:6, lg:2.5}}>
<LeftHome/>
</Grid2>
<Grid2 size={{xs:12, sm:12, md:6, lg:5}}>
<CenterHome/>
</Grid2>
<Grid2 size={{xs:12, sm:12, md:6, lg:3.5}}>
<RightHome/>
</Grid2>
        </Grid2>
    </div>
  )
}

export default HomePage
