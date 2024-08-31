"use client";
import { Add as AddIcon } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	styled,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const MyModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "10px",
});

const Add = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip
				onClick={(e) => {
					setOpen(true);
				}}
				title="Add Post"
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "cal(50% -25px)", md: 30 },
				}}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<MyModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={400} height={280} p={3} bgcolor={"white"} borderRadius={5}>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>
					<UserBox onClick={(e) => setOpen(true)} className=" cursor-pointer">
						<Avatar
							sx={{ width: 30, height: 30 }}
							alt="Cindy Baker"
							src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg"
							className=" cursor-pointer"
						/>
						<Typography fontWeight={500} ml={1}>
							John Doe
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="Whats on your mind ?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} marginTop={2} marginBottom={2}>
						<EmojiEmotionsIcon color="primary" className=" cursor-pointer" />
						<ImageIcon color="secondary" className=" cursor-pointer" />
						<VideoCameraBackIcon color="success" className=" cursor-pointer" />
						<PersonAddIcon color="error" className=" cursor-pointer" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="Basic button group"
					>
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<DateRangeIcon />
						</Button>
					</ButtonGroup>
				</Box>
			</MyModal>
		</>
	);
};

export default Add;
