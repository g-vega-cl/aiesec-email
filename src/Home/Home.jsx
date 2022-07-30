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

const Home = () => {
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    fetch(`http://54.75.95.208:8080/contacts`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },})
      .then((res) => {
        const jsonResult = res.json();
        return jsonResult;
      })
      .then((text) => {
        setContacts(text);
      });
  }, []);


  return (
    <Box>
      <div>Contacts</div>
      {contacts && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">University</TableCell>
                <TableCell align="right">Program</TableCell>
                <TableCell align="right">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact, index) => (
                <TableRow
                  key={`contact.user_id ${index}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {contact.name}
                  </TableCell>
                  <TableCell align="right">{contact.email}</TableCell>
                  <TableCell align="right">{contact.university}</TableCell>
                  <TableCell align="right">{contact.program}</TableCell>
                  <TableCell align="right">{contact.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Home;

// EXPECTED DATA
// [
//   {
//     id: 1,
//     name: "John Smith",
//     email: "john.smith@fake.fake",
//     university: "NotAReal University",
//     program: "Inner Universe",
//     country: "Canada",
//     created_at: "2022-07-30T17:20:30.000Z",
//     updated_at: "2022-07-30T17:20:30.000Z",
//     user_id: 1,
//   },
// ];

// const contactsRows = [
//   createData("Name", "email@mail.com", "Mcgill", "Biology", "Canada"),
//   createData("Name", "email@mail.com", "Mcgill", "Biology", "Canada"),
//   createData("Name", "email@mail.com", "Concordia", "Biology", "Canada"),
//   createData("Name", "email@mail.com", "Mcgill", "Biology", "Canada"),
//   createData("Name", "email@mail.com", "Mcgill", "Biology", "Canada"),
//   createData("Name", "email@mail.com", "UQAM", "Biology", "Canada"),
//   createData("Name", "email@mail.com", "UQAM", "Biology", "Canada"),
// ];
