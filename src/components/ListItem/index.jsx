import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export default function ListItemComponent(props) {
  const { href, LinkComponent, children, text } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton href={href} LinkComponent={'a'}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
