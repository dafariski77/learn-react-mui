import {
  AddSharp,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export default function Add() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddSharp />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              src="data:image/jpeg;base64,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"
            />
            <Typography fontWeight={500} variant="span">
              Pak Kris
            </Typography>
          </UserBox>
          <TextField
            sx={{
              width: "100%",
            }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="Secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
