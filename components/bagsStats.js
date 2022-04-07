import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

import { useAccount, useBalance } from "wagmi";

const BagsStats = () => {
	const [{ data: accountData }, disconnect] = useAccount({
		fetchEns: true,
	});

	const [{ data, loading }, getBalance] = useBalance({
		addressOrName: accountData?.address,
	});

	const { data: collection, error } = useSWR("/api/stats", fetcher);

	if (loading && collection)
		return (
			<>
				<div className="flex flex-col items-center justify-center grow w-full">
					<h2 className="m-6 font-bold text-2xl bg-transparent flex items-center justify-center">
						<span className="mr-2">Mininum</span>{" "}
						<Image src="/logo.png" width={24} height={24} />{" "}
						<span className="ml-2">value </span>
					</h2>
					<div className="p-4 mx-2 w-1/6 flex flex-row items-center justify-center h-20 rounded-full border-1 shadow-2xl">
						<svg
							role="status"
							className="mr-2 w-8 h-min text-gray-200 animate-spin dark:text-gray-300 fill-pink-500"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						Loading...
					</div>
				</div>
				<div className="flex flex-col items-center mb-48">
					<table className="w-4/5 text-sm text-center text-black">
						<thead className="text-xs text-white uppercase shadow-2xl border-transparent">
							<tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent">
								<th
									scope="col"
									className="px-6 py-3 border-transparent rounded-tl-xl mb-8"
								>
									Collection
								</th>
								<th scope="col" className="px-6 py-3 border-transparent">
									Floor
								</th>
								<th scope="col" className="px-6 py-3 border-transparent">
									Volume
								</th>
								<th scope="col" className="px-6 py-3 border-transparent">
									Supply
								</th>
								<th scope="col" className="px-6 py-3 border-transparent">
									Owners
								</th>
								<th
									scope="col"
									className="px-6 py-3 border-transparent rounded-tr-xl"
								>
									Bags
								</th>
							</tr>
						</thead>
						<tbody className="shadow-2xl border-transparent"></tbody>
					</table>
					<svg
						role="status"
						className="w-8 h-40 text-gray-200 animate-spin dark:text-gray-300 fill-pink-500"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				</div>
			</>
		);

	return (
		<>
			<div className="flex flex-col items-center justify-center grow w-full">
				<h2 className="m-6 font-bold text-2xl bg-transparent flex items-center justify-center">
					<span className="mr-2">Mininum</span>{" "}
					<Image src="/logo.png" width={24} height={24} />{" "}
					<span className="ml-2">value </span>
				</h2>
				<div className="p-4 mx-2 w-1/6 flex flex-row items-center justify-center h-20 rounded-full border-1 shadow-2xl">
					<svg
						className="mx-2"
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="20"
					>
						<path
							d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
							fill="rgb(52,52,52)"
						></path>
						<path
							d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
							fill="rgb(140,140,140)"
						></path>
						<path
							d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
							fill="rgb(60,60,59)"
						></path>
						<path
							d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
							fill="rgb(140,140,140)"
						></path>
						<path
							d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
							fill="rgb(20,20,20)"
						></path>
						<path
							d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
							fill="rgb(57,57,57)"
						></path>
					</svg>
					<span className="text-2xl">{data?.formatted.substring(0, 4)}</span>
				</div>
			</div>
			{collection ? (
				<>
					<div className="flex flex-col items-center">
						<table className="w-4/5 text-sm text-center text-black mb-48">
							<thead className="text-xs text-white uppercase shadow-2xl border-transparent">
								<tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-transparent">
									<th
										scope="col"
										className="px-6 py-3 border-transparent rounded-tl-xl mb-8"
									>
										Collection
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Floor
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Volume
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Supply
									</th>
									<th scope="col" className="px-6 py-3 border-transparent">
										Owners
									</th>
									<th
										scope="col"
										className="px-6 py-3 border-transparent rounded-tr-xl"
									>
										Bags
									</th>
								</tr>
							</thead>
							<tbody className="shadow-2xl border-transparent">
								{collection.collections?.map((collection) => (
									<tr>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-black whitespace-nowrap"
										>
											{collection.name}
										</th>
										<td className="px-6 py-4 border-transparent">
											<svg
												className="absolute ml-8"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="20"
											>
												<path
													d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
													fill="rgb(52,52,52)"
												></path>
												<path
													d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
													fill="rgb(60,60,59)"
												></path>
												<path
													d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
													fill="rgb(20,20,20)"
												></path>
												<path
													d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
													fill="rgb(57,57,57)"
												></path>
											</svg>
											{collection.floor}
										</td>
										<td className="px-6 py-4 border-transparent">
											<svg
												className="absolute ml-10"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="20"
											>
												<path
													d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
													fill="rgb(52,52,52)"
												></path>
												<path
													d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
													fill="rgb(60,60,59)"
												></path>
												<path
													d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
													fill="rgb(20,20,20)"
												></path>
												<path
													d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
													fill="rgb(57,57,57)"
												></path>
											</svg>
											{collection.volume}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.supply}
										</td>
										<td className="px-6 py-4 border-transparent">
											{collection.owners}
										</td>
										<td className="px-6 py-4 border-transparent">
											<svg
												className="absolute ml-6"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="20"
											>
												<path
													d="M 5.948 0.239 L 5.821 0.663 L 5.821 12.974 L 5.948 13.098 L 11.745 9.72 Z"
													fill="rgb(52,52,52)"
												></path>
												<path
													d="M 5.948 0.239 L 0.152 9.72 L 5.948 13.098 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 14.18 L 5.877 14.266 L 5.877 18.651 L 5.948 18.857 L 11.748 10.804 L 5.948 14.18 Z"
													fill="rgb(60,60,59)"
												></path>
												<path
													d="M 5.948 18.857 L 5.948 14.18 L 0.152 10.804 Z"
													fill="rgb(140,140,140)"
												></path>
												<path
													d="M 5.948 13.098 L 11.745 9.72 L 5.948 7.123 Z"
													fill="rgb(20,20,20)"
												></path>
												<path
													d="M 0.152 9.72 L 5.948 13.098 L 5.948 7.123 Z"
													fill="rgb(57,57,57)"
												></path>
											</svg>
											{collection.floor * 2}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			) : (
				<>
					<div>blob</div>
				</>
			)}
		</>
	);
};

export default BagsStats;
