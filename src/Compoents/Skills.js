import React from "react";
import { VictoryPie } from "victory";
import { data } from "./GraphData";

const Skills = () => {
	return (
		<div className="centerChart">
			<div className="chart-container">
				<h1>Skills</h1>
				<div>
					<VictoryPie
						colorScale={["#D7494B", "#F3722C", "#F9C74F", "#90BE6D", "#43AA8B", "#577590", "#6D549F"]}
						data={data}
						width={500}
						style={{
							labels: {
								fontSize: 20,
								fill: "#e5e5e5",
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
