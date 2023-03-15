import { Box as MUIBox } from '@mui/material';
import { styled } from '@mui/system';

export const Triangle = styled('div')({
  position: 'absolute',
  width: '0',
  height: '0',
  borderRight: '10px solid transparent',
  borderTop: '10px solid transparent',
  borderLeft: '10px solid #F2FBFF',
  top: '-10px',
  left: '25px',
});

export const Line = styled('div')({
  position: 'absolute',
  top: '-10px',
  left: '25px',
  backgroundColor: '#C4CBCF',
  width: '1px',
  height: '10px',
  zIndex: 2,
});

export const WhiteLine = styled('div')({
  position: 'absolute',
  top: '-11px',
  left: '24px',
  backgroundColor: '#fff',
  width: '1px',
  height: '10px',
  zIndex: 2,
});

export const SlashLine = styled('div')({
  position: 'absolute',
  top: '-13px',
  left: '29.5px',
  backgroundColor: '#C4CBCF',
  width: '1px',
  height: '15px',
  transform: 'rotate(-45deg)',
});

export const Box = styled(MUIBox)({
  position: 'relative',
  background: '#F2FBFF',
  width: '100%',
  border: '1px solid #C4CBCF',
  boxShadow: '0px 4px 10px rgba(128, 128, 128, 0.1)',
  padding: '16px',
});

export const Container = styled('div')({
  marginBottom: '20px',
});
export const UserInfo = styled('div')({
  display: 'flex',
  marginBottom: '12px',
});
