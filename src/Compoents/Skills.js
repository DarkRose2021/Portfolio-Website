import React, { useEffect, useState } from "react";
import {
	VictoryPie,
	VictoryBar,
	VictoryTheme,
	VictoryChart,
	VictoryAxis,
	VictoryLabel,
	VictoryLegend,
} from "victory";
import { data, pieData, pieLabels } from "./GraphData";

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
				{/* Might change */}
				<h4>Measured with how comfortable I am using them</h4>
				<div>
					{/* Doesn't size down need to fix */}
					{isMobile ? (
						<>
							<VictoryPie
								colorScale={[
									"#D7494B",
									"#F3722C",
									"#F9C74F",
									"#90BE6D",
									"#43AA8B",
									"#577590",
									"#6D549F",
									"#508CA4",
								]}
								data={pieData}
								width={1000}
								style={{
									labels: {
										fill: "#273134",
									},
								}}
							/>
							<VictoryLegend
								x={170}
								y={10}
								orientation="vertical"
								gutter={20}
								style={{ border: { stroke: "#e5e5e5" }, labels:{fill:"#e5e5e5"}}}
								colorScale={[
									"#D7494B",
									"#F3722C",
									"#F9C74F",
									"#90BE6D",
									"#43AA8B",
									"#577590",
									"#6D549F",
									"#508CA4",
								]}
								data={pieLabels}
							/>
						</>
					) : (
						<VictoryChart
							theme={VictoryTheme.material}
							domainPadding={{ x: 35 }}
							width={1200}
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
								tickValues={[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]}
								tickFormat={[
									"Java",
									"C#",
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
