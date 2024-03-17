import React, { useState } from 'react'
import { StyledHeader } from './header.styles';
import { useTranslation } from 'react-i18next';
import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <Container>
        <StyledHeader>
          <Typography variant="h1">{t('labels.schedules')}</Typography>
          <IconButton aria-label="menu-icon" onClick={() => setOpen(true)}><MenuIcon fontSize='large' /></IconButton>
        </StyledHeader>
        <Drawer
          anchor={'right'}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              <ListItemButton>
                <ListItem>
                  <Typography>Menu 1</Typography>
                </ListItem>
              </ListItemButton>
              <ListItemButton>
                <ListItem>
                  <Typography>Menu 2</Typography>
                </ListItem>
              </ListItemButton>
              <ListItemButton>
                <ListItem>
                  <Typography>Menu 3</Typography>
                </ListItem>
              </ListItemButton>
            </List>
            
          </Box>
        </Drawer>
      </Container>
    </header>
  )
}

export default Header;
