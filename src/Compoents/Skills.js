import React, { PureComponent } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const data = [
	{
		name: "React.js",
		level: 6,
		amt: 6,
	},
	{
		name: "SCSS",
		level: 7,
		amt: 7,
	},
	{
		name: "JavaScript",
		level: 8,
		amt: 8,
	},
	{
		name: "Angular",
		level: 4,
		amt: 4,
	},
	{
		name: "Java",
		level: 3,
		amt: 3,
	},
	{
		name: "Python",
		level: 4,
		amt: 4,
	},
	{
		name: "HTML",
		level: 10,
		amt: 10,
	},
	{
		name: "CSS",
		level: 10,
		amt: 10,
	},
];

export default class Skills extends PureComponent {
	render() {
		return (
			<div className="centerChart">
				<div className="chart-container">
					<h1>Skills</h1>
					<div>
					<BarChart
						width={1000}
						height={500}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="level" fill="#B99AC4" />
					</BarChart>
				</div>
				</div>
			</div>
		);
	}
}
