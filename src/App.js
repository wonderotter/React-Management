import React from "react";
import "./App.css";
import Customer from "./components/Customer";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const customers = [
	{
		id: 1,
		image: "https://placeimg.com/70/70/1",
		name: "장희유",
		birthday: "940302",
		gender: "여",
		job: "웹 개발자",
	},
	{
		id: 2,
		image:
			"https://pbs.twimg.com/profile_images/2961595463/e18d502130376d14763c7c522d307f75_400x400.jpeg",
		name: "히컵",
		birthday: "140305",
		gender: "남",
		job: "족장",
	},
	{
		id: 3,
		image: "https://t1.daumcdn.net/cfile/tistory/22E37E335980311234",
		name: "강하늘",
		birthday: "900221",
		gender: "남",
		job: "배우",
	},
];

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto",
	},
	table: {
		minWidth: 1080,
	},
});

class App extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>번호</TableCell>
							<TableCell>사진</TableCell>
							<TableCell>이름</TableCell>
							<TableCell>생년월일</TableCell>
							<TableCell>성별</TableCell>
							<TableCell>직업</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{customers.map(el => {
							return (
								<Customer
									key={el.id}
									id={el.id}
									name={el.name}
									image={el.image}
									birthday={el.birthday}
									gender={el.gender}
									job={el.job}
								/>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(App);
