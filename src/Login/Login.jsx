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
        // username,
        // password
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // Redirect to Home "/" if success message
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: " #037EF3",
        height: "600px",
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
