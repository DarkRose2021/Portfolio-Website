import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop;
		setIsVisible(scrolled > 100); // You can adjust this value based on your preference
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
		
			onClick={scrollToTop}
			style={{
				display: isVisible ? "block" : "none",
			}}
			className="scrollBtn"
		>
			Scroll to Top <i class="bi bi-arrow-up-square-fill"></i>
		</button>
	);
};

export default ScrollToTopButton;
