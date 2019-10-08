import React from "react";
import "./App.css";
//import axios from "axios";
import Customer from "./components/Customer";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
	state = {
		customers: "",
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ customers: res }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch("/api/customers")
		.then(res => res.json())
		.catch(err => console.log(err));
		
		return response;
	};

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
						{this.state.customers ? this.state.customers.map(el => {
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
						}) : "" }
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(App);
