import { Avatar as MUIAvatar, Box as MUIBox } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  margin: '14px 19px 0 17px',
});

export const Avatar = styled(MUIAvatar)({
  width: '124px',
  height: '124px',
  zIndex: '2',
});

export const Box = styled(MUIBox)(({ theme }) => ({
  width: '75vw',
  height: '54px',
  backgroundColor: theme.palette.primary.main,
  border: '1px solid #DADADA',
  borderRadius: '5px',
  position: 'absolute',
  left: '100px',
  top: '72px',
  padding: '6px 0 0 52px',
}));
