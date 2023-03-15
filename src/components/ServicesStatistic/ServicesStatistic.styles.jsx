import {
  TableContainer as MUITableContainer,
  TableCell as MUITableCell,
  TableRow as MUITableRow,
  Box as MUIBox,
} from '@mui/material';
import { styled } from '@mui/system';

export const TableContainer = styled(MUITableContainer)({
  marginLeft: '25%',
  marginBottom: '18px',
  width: '70%',
  height: '170px',
  boxShadow: 'none',
  border: 'none',
  flexShrink: 0,
});

export const Box = styled(MUIBox)(({ theme }) => ({
  width: '85%',
  height: '24px',
  backgroundColor: theme.palette.info.dark,
  position: 'relative',
  paddingLeft: '6px',
  borderRadius: '0px 3px 3px 0px',
}));

export const TableRow = styled(MUITableRow)({
  marginBottom: '2px',

  '&:nth-of-type(1) td': {
    border: 'none',
  },

  '&:nth-of-type(2) td': {
    border: 'none',
  },

  '&:nth-of-type(4) td': {
    border: 'none',
  },
});

export const TableCell = styled(MUITableCell)({
  paddingBottom: 0,
  paddingTop: 0,
  height: '26px',
});
