import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
	import.meta.env.VITE_API_KEY
}`;
export const Gallery = () => {
	const { searchValue } = useGlobalContext();
	const response = useQuery({
		queryKey: ["images", searchValue],
		queryFn: async () => {
			const result = await axios.get(
				`${url}&&query=${searchValue}`,
			);
			return result.data;
		},
	});
	if (response.isLoading)
		return (
			<section className="image-container">
				<h4>Loading....</h4>
			</section>
		);
	if (response.error)
		return (
			<section className="image-container">
				<h4>There was an error</h4>
			</section>
		);
	const results = response.data.results;
	if (results.length < 1)
		return (
			<section className="image-container">
				<h4>No result found....</h4>
			</section>
		);
	return (
		<section className="image-container">
			{results.map((item) => {
				const url = item?.urls?.regular;
				return (
					<img
						src={url}
						alt={item.alt_description}
						key={item.id}
						className="img"
					></img>
				);
			})}
		</section>
	);
};
