import React,
{
    FC,
    ReactElement,
} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import BaseContainer from '../../components/BaseContainer';
import ListItemText from '@mui/material/ListItemText';
const HowTo: FC = (): ReactElement => {
    return (
        <BaseContainer>
            <Box
                sx={{
                    p: '4rem',
                }}
            >
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Description
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="1. The application is a simulation of a toy robot moving on a square tabletop, of dimensions
                5 units x 5 units."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="2. There are no other obstructions on the table surface."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="3. The robot is free to roam around the surface of the table, but must be prevented from
  falling to destruction. Any movement that would result in the robot falling from the table
  must be prevented, however further valid movement commands must still be allowed."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="4. Create an application that can read in commands of the following form"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="5. PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH,
  EAST or WEST."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="6. The origin (0,0) can be considered to be the SOUTH WEST most corner."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="7. The first valid command to the robot is a PLACE command, after that, any sequence of
  commands may be issued, in any order, including another PLACE command. The
  application should discard all commands in the sequence until a valid PLACE command
  has been executed."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="8. MOVE will move the toy robot one unit forward in the direction it is currently facing."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="9. LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without
  changing the position of the robot."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="10. REPORT will announce the X,Y and F of the robot. This can be in any form, but standard
  output is sufficient."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="11. A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and
  REPORT commands."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="12. Input can be from a file, or from standard input, as the developer chooses."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="13. Provide test data to exercise the application. (file input commands.txt)"
                            />
                        </ListItem>
                    </List>
                </Box>
                <Divider
                    sx={{
                        m: 0.5,
                    }}
                    orientation="horizontal"
                    data-cy={'howto-h3-divider'}
                />
                <Box
                    sx={{
                        mt: 1,
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Contains
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="1. The toy robot must not fall off the table during movement. This also includes the initial
                placement of the toy robot."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="2. Any move that would cause the robot to fall must be ignored."
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </BaseContainer>
    );
};

export default HowTo;
