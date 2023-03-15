import { Box as MUIBox } from '@mui/material';
import { styled } from '@mui/system';

export const Box = styled(MUIBox)({
  height: '190px',
  backgroundColor: '#F2F2F2',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});

export const TextField = styled('input')({
  height: '63px',
  width: '80%',
});
