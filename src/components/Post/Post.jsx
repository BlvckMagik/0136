import { Typography } from '@mui/material';
import {
  Triangle,
  Box,
  SlashLine,
  Line,
  WhiteLine,
  Container,
  UserInfo,
} from './Post.styles';

const Post = ({ name, date, content }) => {
  return (
    <Container>
      <UserInfo>
        <Typography
          variant='body1'
          sx={{ fontWeight: 700, marginRight: '8px' }}
        >
          {name}
        </Typography>
        <Typography variant='subtitle2' sx={{ color: '#808080' }}>
          {date}
        </Typography>
      </UserInfo>
      <Box>
        <Line />
        <WhiteLine />
        <SlashLine />
        <Triangle />
        <Typography sx={{ overflowWrap: 'break-word' }} variant='body1'>
          {content}
        </Typography>
      </Box>
    </Container>
  );
};

export default Post;
