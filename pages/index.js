import Head from "next/head";
import Table from "../src/table";
import { Typography } from "@material-ui/core";
export default function Home() {
	const data = require("../data/data.json");
	return (
		<>
			<Head>
				<title className="mainHeading">30 Days of Cloud - Progress Board</title>
				<meta name="viewport" content="width=device-width, initial-scale=0.1" />
			</Head>
			<div>
				<footer className="flex apart subhead">
					<Typography className="subhead" variant="body2" color="textSecondary">
						Last updated: {data.buildDate}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						<a
							href="https://www.github.com/AdarshAnand67"
							target="_blank"
							rel="noopener noreferrer"
						>
							Made with 💗 by Adarsh and Aniket
						</a>
					</Typography>
				</footer>
				<div className="center">
					<Typography className="bolder" variant="h2" color="textPrimary">
						GDSC - {data.institute}
					</Typography>
					<Typography className="bolder" variant="h4" color="secondary">
						30 Days of Cloud - Student Progress
					</Typography>
					<div className="shadow">
						<img
							className="img"
							src="https://miro.medium.com/max/1024/1*9v802ob2i_yWag7I0IVD9g.jpeg"
							alt="GDSC"
						></img>
					</div>
				</div>
				<Table data={data.resultsWithRank}></Table>
			</div>
			<div className="center">
				<Typography variant="body2" color="textSecondary">
					So what are you waiting for? Go collect your badges and climb up the
					Ladderboard !
				</Typography>
				<img
					src="https://cdn.hashnode.com/res/hashnode/image/upload/v1609994899138/sC82KH6-ut.png?auto=compress,format&format=webp"
					alt="GDSC"
					size="50%"
				/>
			</div>
		</>
	);
}
