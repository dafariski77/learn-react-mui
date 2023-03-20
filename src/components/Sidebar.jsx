import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import ListItemComponent from "./ListItem";

export default function Sidebar({ mode, setMode }) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          <ListItemComponent href="#home" text="Homepage">
            <Home />
          </ListItemComponent>
          <ListItemComponent href="#page" text="Pages">
            <Article />
          </ListItemComponent>
          <ListItemComponent href="#group" text="Groups">
            <Group />
          </ListItemComponent>
          <ListItemComponent href="#market" text="Marketplace">
            <Storefront />
          </ListItemComponent>
          <ListItemComponent href="#people" text="Friends">
            <Person />
          </ListItemComponent>
          <ListItemComponent href="#settings" text="Settings">
            <Settings />
          </ListItemComponent>
          <ListItemComponent href="#profile" text="Profile">
            <AccountBox />
          </ListItemComponent>
          <ListItem disablePadding>
            <ListItemButton href="#simple-list" LinkComponent={"a"}>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
