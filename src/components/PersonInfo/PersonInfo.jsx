import { Typography } from '@mui/material';
import AvatarImg from '../../images/avatar.png';

import { Avatar, Container, Box } from './PersonInfo.styles';

const PersonInfo = () => {
  return (
    <>
      <Container>
        <Avatar alt='userAvatar' src={AvatarImg} />
        <div style={{ minWidth: '90px', margin: '7px 0 0 10px' }}>
          <Typography variant='h1'>Eva Jonson</Typography>
          <Typography variant='subtitle1'>Sales Manager</Typography>
        </div>
      </Container>
      <Box>
        <Typography variant='body2'>
          I will find the best offers for you. <br /> My services are absolutely
          free.
        </Typography>
      </Box>
    </>
  );
};

export default PersonInfo;
