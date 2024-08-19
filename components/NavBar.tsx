"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useAppContext } from "@/context";
import { useEffect } from "react";

export default function NavBar() {
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ id: null });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser({
        id: JSON.parse(user),
      });
    }
  }, [user.id]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user.id ? (
            <Button color="inherit" onClick={handleLogout} href="/login">
              Logout
            </Button>
          ) : (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
