import React,
{
    FC,
    ReactElement,
} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '../../components/Table';
import BaseContainer from '../../components/BaseContainer';
import CommandsInput from '../../components/CommandsInput';
import CommandsHistory from '../../components/CommandsHistory';
import CommandOutput from '../../components/CommandOutput';

const Simulator: FC = (): ReactElement => {

    return (
      <BaseContainer>
          <Box
            sx={{
                m: {
                    lg: 4,
                },
                px: {
                    md: 16,
                    lg: 8,
                },
            }}
            data-cy={'simulator-box'}
          >
              <Grid
                container
                data-cy={'simulator-grid-container'}
              >
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    data-cy={'simulator-grid-table'}
                    sx={{
                        padding: {
                            xs: '1rem',
                            lg: 0,
                        }
                    }}
                  >
                      <Table />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xs={12}
                    data-cy={'simulator-grid-commands'}
                  >
                      <CommandsInput />
                      <CommandOutput />
                      <CommandsHistory />
                  </Grid>
              </Grid>
          </Box>
      </BaseContainer>
    );
};

export default Simulator;
