import React, { useContext } from "react";
import data from "../../assets/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	data.map((item) => {
		const { id, std, price, curriculum } = item;
	});

	return (
		<AppContext.Provider
			value={{
				id,
				std,
				price,
				curriculum,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
