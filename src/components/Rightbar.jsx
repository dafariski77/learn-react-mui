import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8} sx={{ justifyContent: 'left' }}>
          <Avatar
            alt="Pak Ambatukam"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            alt="Waduh Ayo Aja Gwe Mah"
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a7c368e666b2b8262ebb4b12a657a2d4~c5_720x720.jpeg?x-expires=1679410800&x-signature=VDU%2BsT%2FX34yK7YvojEhAKY0bS1A%3D"
          />
          <Avatar
            alt="Bang Rusdi"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            alt="Waker Family"
            src="https://cdn-2.tstatic.net/surabaya/foto/bank/images/kkb-papua-yang-tembaki-tni-polri-di-wamena-bukan-anggota-egianus-kogoya.jpg"
          />
          <Avatar alt="Drevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Vrevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://t-2.tstatic.net/travel/foto/bank/images/nasi-cumi-pak-kris.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
