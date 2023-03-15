/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';

import LikeIcon from '../../images/like.svg';
import CommentIcon from '../../images/comment.svg';
import Post from '../Post';

import { Wrapper, ActionBtns, ReactionBlock } from './Reviews.styles';

const Reviews = ({ posts }) => {
  return (
    <Wrapper>
      <ActionBtns>
        <Typography variant='h2' sx={{ marginRight: '8px' }}>
          Latest reviews
        </Typography>
        <a href='#' style={{ flexGrow: 2 }}>
          All reviews
        </a>
        <ReactionBlock>
          <img alt='likeIcon' src={LikeIcon}></img>
          <Typography variant='h6'>131</Typography>
        </ReactionBlock>
        <ReactionBlock>
          <img alt='commentIcon' src={CommentIcon}></img>
          <Typography variant='h6'>14</Typography>
        </ReactionBlock>
      </ActionBtns>
      {posts?.map(({ name, date, content }, i) => (
        <Post key={i} name={name} date={date} content={content} />
      ))}
    </Wrapper>
  );
};

export default Reviews;
