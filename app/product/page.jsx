"use client";
import React, { useState } from "react";
const data = [
	{
		id: 1,
		name: "chair",
		parts: "arm rest",
		unit: "pcs",
		stock: 4,
		location: [
			{ name: "saleable", stock: 2 },
			{ name: "analysis", stock: 6 },
			{ name: "damaged", stock: 1 },
		],
	},
	{
		id: 2,
		name: "table",
		parts: "arm rest",
		unit: "pcs",
		stock: 6,
		location: [
			{ name: "saleable", stock: 2 },
			{ name: "analysis", stock: 6 },
			{ name: "damaged", stock: 1 },
		],
	},
	{
		id: 3,
		name: "sofa",
		parts: "arm rest",
		unit: "pcs",
		stock: 4,
		location: [
			{ name: "saleable", stock: 2 },
			{ name: "analysis", stock: 6 },
			{ name: "damaged", stock: 1 },
		],
	},
	{
		id: 4,
		name: "bed",
		parts: "arm rest",
		unit: "pcs",
		stock: 4,
		location: [
			{ name: "saleable", stock: 2 },
			{ name: "analysis", stock: 6 },
			{ name: "damaged", stock: 1 },
		],
	},
];
const AllProducts = () => {
	const [products, setProducts] = useState(data);
	const [toggleStock, setToggleStock] = useState(false);
	const searchProduct = (name) => {
		return name
			? setProducts(products.filter((product) => product.name.includes(name)))
			: setProducts(data);
	};

	if (data.length === 0) {
		return <h1 className="capitalize">no products to show</h1>;
	}
	return (
		<div className="w-full py-8 md:p-16 flex flex-col gap-4 min-h-screen shadow-2xl">
			<h4 className="text-2xl text-primary drop-shadow capitalize text-center">
				all products
			</h4>
			<div className="w-full form-control px-4">
				<label htmlFor="search" className="label">
					<span className="label-text capitalize text-lg">search :</span>
				</label>
				<input
					type="text"
					name="search"
					id="search"
					className="input input-secondary w-full"
					placeholder="product name"
					onChange={(e) => searchProduct(e.target.value)}
				/>
			</div>
			<div className="overflow-x-auto w-full">
				<table className="table table-sm capitalize table-pin-rows">
					<thead className="text-center">
						<tr>
							<th>#</th>
							<th>name</th>
							<th>parts</th>
							<th>unit</th>
							<th>stock</th>
							<th>actions</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{/* the below table row will be array of all products coming from products model */}
						{products.map((product, index) => {
							const { id, name, parts, unit, stock, location } = product;
							return (
								<tr className="hover" key={id}>
									<th>{index + 1}</th>
									<td>{name}</td>
									<td>{parts}</td>
									<td>{unit}</td>
									<td>
										{location.map((loc, index) => {
											return (
												<div
													key={index}
													className="flex align-middle justify-evenly"
												>
													<th>{loc.name}</th>
													<td>{loc.stock}</td>
												</div>
											);
										})}
									</td>
									<td className="flex gap-2 items-center justify-center">
										<button className="btn btn-accent btn-xs">edit</button>
										<button className="btn btn-error text-base-100 btn-xs">
											delete
										</button>
										{/* when edit option is clicked open a modal with all the details of that particular product to edit */}
										{/* then refresh the page with details */}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllProducts;
