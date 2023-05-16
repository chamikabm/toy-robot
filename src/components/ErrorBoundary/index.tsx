import React,
{
  Component,
  ReactNode,
  ErrorInfo,
} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type Props = {
  children: ReactNode;
}

type State = {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    console.error('getDerivedStateFromError error', error);
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          paddingTop="2rem"
          height="70vh"
        >
          <Grid
            item
          >
            <Box>
              <Typography
                variant={'h6'}
                color={'secondary'}
              >
                {'It\'s not you, It\'s us!'}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                color={'secondary'}
              >
                {'Sorry! Something went wrong, Maybe retry reloading the page.'}
              </Typography>
              <Button
                variant="contained"
                onClick={() => window.location.reload()}
              >
                {'Reload'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
