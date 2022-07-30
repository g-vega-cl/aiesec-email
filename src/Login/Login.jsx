import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // flight: selectedFlight,
        // seat: selectedSeat,
        // givenName,
        // surname,
        // email,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
    // object.values() create an array
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>(Eventually the PoweredByAIESEC logo)</div>
      Login
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="outlined">Submit</Button>
    </Box>
  );
};

export default Login;
