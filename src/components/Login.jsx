import { styled } from "@mui/material/styles";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import colors from "./styles/colors";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ButtonLogin = styled(Button)({
  width: "78%",
  alignSelf: "center",
  backgroundColor: colors.login,
  color: colors.loginDark,
  fontFamily: "Raleway",
  fontWeight: "400",
  "&:hover": {
    background: colors.loginButtonLight,
  },
});

export default function Login() {
  const [visibility, setVisibility] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const handleClickShowPassword = () => {
    setVisibility(!visibility);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Stack
        bgcolor={colors.white}
        height="432px"
        width="430px"
        borderRadius="32px"
        boxShadow="0px 5px 3px 1px #68828F"
      >
        <Stack
          orientation="vertical"
          justifyContent="center"
          spacing={3}
          width={"100%"}
          height={"100%"}
          fontSize={"5px"}
        >
          <Typography
            fontFamily={"Raleway"}
            fontWeight={"300"}
            fontSize={"1.5rem"}
            alignSelf={"center"}
          >
            Bienvenido al portal de citas
          </Typography>

          <FormControl
            sx={{ width: "75%", alignSelf: "center" }}
            variant="standard"
          >
            <InputLabel>Correo electronico</InputLabel>
            <Input type={"text"} />
          </FormControl>

          <FormControl
            sx={{ width: "75%", alignSelf: "center" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">
              Contraseña
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={visibility ? "text" : "password"}
              onChange={(event) => handleChange(event)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {visibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <ButtonLogin>Iniciar sesión</ButtonLogin>

          <Link
            href="#"
            color={colors.senary}
            underline="hover"
            fontFamily={"Raleway"}
            fontWeight={"300"}
            fontSize={"1.0rem"}
            alignSelf={"center"}
          >
            {"Olvide mi contraseña"}
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
