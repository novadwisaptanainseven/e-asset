import React from "react";

const RincianBarang = ({ data }) => {
	const getBidang = (val) => {
		let arr = val.split(" ");

		return arr[2];
	};

	// const getIdBidang = (val) => {
	// 	let arr = val.split(" ");

	// 	return arr[0];
	// };

	return (
		<>
			<table
				width="100%"
				className="table table-bordered mt-3 bg-white shadow-sm"
			>
				<thead>
					<tr>
						<th>No</th>
						<th>Bidang</th>
						<th>Baik</th>
						<th>Rusak</th>
						<th>Rusak Ringan</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{getBidang(item.bidang)}</td>
							<td>{item.jumlah_baik}</td>
							<td>{item.jumlah_rusak}</td>
							<td>{item.jumlah_rusak_ringan}</td>
						</tr>
					))}
					{data.length === 0 && (
						<tr>
							<td colSpan={5} className="text-center">
								Data Belum Ada
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default RincianBarang;
