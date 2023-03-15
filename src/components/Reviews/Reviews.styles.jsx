import { styled } from '@mui/system';

export const Wrapper = styled('div')({
  position: 'relative',
  padding: '0 20px 0 20px',
});

export const ActionBtns = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12.25px',
  '& img': {
    marginRight: '4px',
  },
});

export const ReactionBlock = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '&:nth-of-type(1)': {
    marginRight: '18px',
  },
});
