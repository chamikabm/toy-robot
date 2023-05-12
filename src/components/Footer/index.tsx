import React,
{
  FC,
  ReactElement,
} from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
} from '@mui/material';

export const Footer: FC = (): ReactElement => {

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
      data-cy={'simulator-footer-box'}
    >
      <Container
        maxWidth="lg"
        data-cy={'simulator-footer-container'}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          data-cy={'simulator-footer-grid-container'}
        >
          <Grid
            item
            xs={12}
            data-cy={'simulator-footer-grid-item-title'}
          >
            <Typography
              color="black"
              variant="h5"
              data-cy={'simulator-footer-grid-typo-title'}
            >
                Toy Robot Simulation
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            data-cy={'simulator-footer-grid-item-info'}
          >
            <Typography
              color="textSecondary"
              variant="subtitle1"
              data-cy={'simulator-footer-typo-item-info'}
            >
              {`${new Date().getFullYear()} | React | Material UI | React Router | Redux Toolkit`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
