import { Table, TableBody, TableHead, Paper, Typography } from '@mui/material';

import {
  TableContainer,
  TableRow,
  TableCell,
  Box,
} from './ServicesStatistic.styles';

const ServicesStatistic = () => {
  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='spanning table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'></TableCell>
            <TableCell align='center'>
              <Typography variant='h4'>Services</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ height: '40px', verticalAlign: 'bottom' }}>
              <Typography variant='h5'>
                <Box sx={{ backgroundColor: '#B1E19B' }}>
                  <span
                    style={{
                      position: 'absolute',
                      width: '150px',
                    }}
                  >
                    Manual tour booking
                  </span>
                </Box>
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='h3'>11</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant='h5'>
                <Box sx={{ width: '21%' }}>
                  <span
                    style={{
                      position: 'absolute',
                      width: '100px',
                    }}
                  >
                    Package tours
                  </span>
                </Box>
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='h3'>3</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ verticalAlign: 'top', height: '40px' }}>
              <Typography variant='h5'>
                <Box sx={{ width: '14%' }}>Hotels</Box>
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='h3'>1</Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ height: '36px', verticalAlign: 'bottom' }}>
            <TableCell>
              <Typography variant='h1'>Total</Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography variant='h1' align='center'>
                15
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServicesStatistic;
