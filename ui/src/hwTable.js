import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function createData(name, setID, totalCapacity, usedCapacity) {
  const capacity = (totalCapacity - usedCapacity) + "/" + totalCapacity
  return { name, setID, capacity };
}

const rows = [
  createData('HWsetAlpha', '0001', 300, 50),
  createData('HWsetDelta', '0023', 1000, 500),
  createData('HWsetOmega', '0025', 450, 0),
];

export default function HardwareSetsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key={"name"} align={"center"} style={{ minWidth: 170 }}>
                  Name
              </TableCell>
              <TableCell key={"setID"} align={"center"} style={{ minWidth: 170 }}>
                  Set ID
              </TableCell>
              <TableCell key={"capacity"} align={"center"} style={{ minWidth: 100 }}>
                  Available Capacity
              </TableCell>
              <TableCell key={"checkIn"} align={"center"} style={{ minWidth: 170 }}>
                  Check In
              </TableCell>
              <TableCell key={"checkOut"} align={"center"} style={{ minWidth: 170 }}>
                  Check Out
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.setID}>
                    <TableCell key={"name"} align={"center"} style={{ minWidth: 170 }}>
                      {row["name"]}
                    </TableCell>
                    <TableCell key={"setID"} align={"center"} style={{ minWidth: 170 }}>
                      {row["setID"]}
                    </TableCell>
                    <TableCell key={"capacity"} align={"center"} style={{ minWidth: 170 }}>
                      {row["capacity"]}
                    </TableCell>
                    <TableCell key={"checkIn"} align={"center"} style={{ minWidth: 170 }}>
                      <TextField
                          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                          label="Enter Qty"
                          id="outlined-size-small"
                          size="small"
                          type="number"
                        />
                      <Button size="small" sx={{mt:0.5}}>Check In</Button>

                    </TableCell>
                    <TableCell key={"checkOut"} align={"center"} style={{ minWidth: 170 }}>
                      <TextField
                          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                          label="Enter Qty"
                          id="outlined-size-small"
                          size="small"
                          type="number"
                        />
                      <Button size="small" sx={{mt:0.5}}>Check Out</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
