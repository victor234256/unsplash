import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const AppContext = createContext();
const getInitialDarkMode = () => {
	const preferDarkMode = window.matchMedia(
		"(prefers-color-scheme:dark)",
	).matches;
	const storedDarkMode =
		localStorage.getItem("darkTheme") === "true";

	return preferDarkMode || storedDarkMode;
};
export const AppProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(
		getInitialDarkMode(),
	);
	const [searchValue, setSearchValue] = useState("cat");
	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);
		localStorage.setItem("darkTheme", newDarkTheme);
	};

	useEffect(() => {
		document.body.classList.toggle(
			"dark-theme",
			isDarkTheme,
		);
	}, [isDarkTheme]);
	return (
		<AppContext.Provider
			value={{
				isDarkTheme,
				toggleDarkTheme,
				searchValue,
				setSearchValue,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () =>
	useContext(AppContext);
