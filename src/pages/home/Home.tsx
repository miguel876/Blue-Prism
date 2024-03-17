import React, { useState } from 'react'
import { Grid } from '@mui/material';
import { StyledContainer, StyledGrid } from './home.styles';
import Context from 'context';
import List from './components/list';
import Details from './components/details';

const Home = () => {
  const [logId, setLogId] = useState(1);

  return (
    <Context.Provider value={{ logId, setLogId }}>
      <StyledContainer>
        <StyledGrid container spacing={2} >
          <Grid item xs={12} sm={4}>
            <List />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Details />
          </Grid>
        </StyledGrid>
      </StyledContainer>
    </Context.Provider>
  )
}

export default Home;