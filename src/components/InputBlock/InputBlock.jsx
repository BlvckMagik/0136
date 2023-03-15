import { Button, Typography } from '@mui/material';
import { Box, TextField } from './InputBlock.styles';

const InputBlock = ({ comment, onChange, onClick, onKeypress }) => {
  return (
    <Box>
      <TextField
        value={comment}
        color='warning'
        onChange={e => onChange(e.target.value)}
        onKeyDown={onKeypress}
      />
      <Button onClick={onClick} sx={{ marginTop: '23px' }}>
        <Typography variant='h1'>Send a message</Typography>
      </Button>
    </Box>
  );
};

export default InputBlock;
