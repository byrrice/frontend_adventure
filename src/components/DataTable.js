import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class DataTable extends Component { 

  render() { 
    return (
    <div className="DataTable">
        <Paper style={{ width: 400, margin: 'auto' }}>
            <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date Of Birth</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.people.map(a => <TableRow><TableCell>{a.name}</TableCell><TableCell>{a.dob}</TableCell></TableRow>)}
            </TableBody>
            </Table>
        </Paper>
    </div>
    );
  }
}
export default DataTable;