import React,
{
  memo,
} from 'react';
import Typography from '@mui/material/Typography';

type TText = {
  text: string;
  type: 'caption' | 'overline' | 'subtitle1' | 'subtitle2' | undefined;
};
const Text = ({ text, type = 'overline' }: TText) => {

  if (!text) {
    return null;
  }

  return (
    <Typography
      sx={{
        fontSize: {
          xs: '.4rem',
          sm: '.5rem',
          md: '1rem',
        },
        lineHeight: 1,
      }}
      variant={type}
      display="block"
      gutterBottom
    >
      {text}
    </Typography>
  );
};

export default memo(Text);
