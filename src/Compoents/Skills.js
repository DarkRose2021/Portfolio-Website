import React, { useEffect, useState } from "react";
import {
	VictoryPie,
	VictoryBar,
	VictoryTheme,
	VictoryChart,
	VictoryAxis,
	VictoryLabel,
} from "victory";
import { data, pieData } from "./GraphData";

const Skills = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="centerChart">
			<div className="chart-container">
				<h1>Skills</h1>
				<h4>Measured with how comfortable I am using them</h4>
				<div>
					{isMobile ? (
						<VictoryPie
							colorScale={[
								"#D7494B",
								"#F3722C",
								"#F9C74F",
								"#90BE6D",
								"#43AA8B",
								"#577590",
								"#6D549F",
							]}
							data={pieData}
							width={500}
							style={{
								labels: {
									fill: "#e5e5e5",
								},
							}}
						/>
					) : (
						<VictoryChart
							theme={VictoryTheme.material}
							domainPadding={{ x: 35 }}
							width={1000}
							padding={{ left: 90, top: 0, right: 20, bottom: 33 }}
						>
							<VictoryAxis
								dependentAxis
								style={{
									ticks: { stroke: "transparent" },
									tickLabels: {
										fontSize: 20,
										fill: "#e5e5e5",
									},
								}}
								tickValues={[1.0, 2.0, 3.0, 4.0, 5.0]}
								tickFormat={["Very Low", "Low", "Normal", "High", "Very High"]}
								tickLabelComponent={<VictoryLabel angle={-40} />}
							/>

							<VictoryAxis
								style={{
									ticks: { stroke: "transparent" },
									tickLabels: {
										fontSize: 20,
										fill: "#e5e5e5",
										padding: 5,
									},
								}}
								tickValues={[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]}
								tickFormat={[
									"Java",
									"Python",
									"Angular",
									"React.js",
									"JavaScript",
									"HTML",
									"CSS/SCSS",
								]}
							/>

							<VictoryBar
								barWidth={70}
								style={{
									data: {
										fill: ({ datum }) => datum.fill,
									},
									labels: {
										fontSize: 16,
										fill: "#e5e5e5",
									},
								}}
								data={data}
							/>
						</VictoryChart>
					)}
				</div>
			</div>
		</div>
	);
};

export default Skills;
