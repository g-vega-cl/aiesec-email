import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(name, university, program, country) {
//   return { name, university, program, country};
// };

const Templates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch(`http://54.75.95.208:8080/templates`)
      .then((res) => res.json())
      .then((json) => {
        setTemplates(json);
      });
  }, []);

  return (
    <Box>
      <div>Templates</div>
      {templates && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">University</TableCell>
                <TableCell align="right">Program</TableCell>
                <TableCell align="right">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {templates.map((template) => (
                <TableRow
                  key={template.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {template.body}
                  </TableCell>
                  <TableCell align="right">{template.university}</TableCell>
                  <TableCell align="right">{template.program}</TableCell>
                  <TableCell align="right">{template.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Templates;

// EXPECTED DATA
// [{"id":1,
// "created_at":"2022-07-30T15:38:54.000Z",
// "updated_at":"2022-07-30T15:38:54.000Z",
// "body":"Test Template",
// "user_id":1,
// "university":null,
// "program":null,
// "country":null}]

// const rows = [
//   createData('Welcome email', "Mcgill", "Biology", "Canada"),
//   createData('Fundraising', "Mcgill", "Biology", "Canada"),
//   createData('Fundraising', "Concordia", "Biology", "Canada"),
//   createData('Fundraising', "Mcgill", "Biology", "Canada"),
//   createData('Thank you', "Mcgill", "Biology", "Canada"),
//   createData('Event on Jan 12', "UQAM", "Biology", "Canada"),
//   createData('Event on Jan 15', "UQAM", "Biology", "Canada"),
// ];
