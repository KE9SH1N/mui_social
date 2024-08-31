import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

export default function Home() {
	return (
		<main>
			<Box>
				<Navbar />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<Sidebar />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</main>
	);
}
