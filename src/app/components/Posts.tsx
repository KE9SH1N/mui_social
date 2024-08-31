import React from "react";
import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";

const Posts = () => {
	return (
		<div>
			<Card sx={{ margin: 5 }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardMedia
					component="img"
					height="20%"
					image="https://img.freepik.com/premium-photo/pile-food-with-spoonful-rice-vegetables_1179130-253361.jpg"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite sx={{ color: "red" }} />}
						/>
					</IconButton>
					<IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
				</CardActions>
			</Card>
		</div>
	);
};

export default Posts;
