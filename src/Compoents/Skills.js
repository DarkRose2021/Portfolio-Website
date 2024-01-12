import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import { data } from "./GraphData";

const Skills = () => {
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
};

export default Skills;
