"use client";
import React from "react";

const CreateProduct = () => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="capitalize text-center text-xl lg:text-2xl text-primary drop-shadow">
				create product
			</h4>
			<form action="" className="flex flex-col gap-4">
				<div className="form-control w-full max-w-lg">
					<label htmlFor="productName" className="label">
						<span className="label-text capitalize">product name*</span>
					</label>
					<input
						type="text"
						name="productName"
						id="productName"
						placeholder="product name"
						className="input input-secondary w-full input-sm"
					/>
				</div>
				<div className="form-control w-full max-w-md">
					<label htmlFor="description" className="label">
						<span className="label-text">Description</span>
					</label>
					<textarea
						name="description"
						id="description"
						placeholder="description..."
						className="textarea textarea-secondary w-full"
					></textarea>
				</div>
				<div className="form-control w-full max-w-lg">
					<label htmlFor="part" className="label">
						<span className="label-text capitalize">part</span>
						{/* when create then show a modal to create a new part */}
						<span className="label-text-alt underline">create new</span>
					</label>
					<select
						name="part"
						id="part"
						className="select select-secondary w-full select-sm"
					>
						<option disabled selected>
							part
						</option>
						{/* array of parts coming from parts model */}
					</select>
				</div>
				<div className="form-control w-full max-w-lg">
					<label htmlFor="color" className="label">
						<span className="label-text capitalize">color</span>
						<span className="label-text-alt underline">create new</span>
					</label>
					<select
						name="color"
						id="color"
						className="select select-secondary select-sm w-full"
					>
						<option disabled selected>
							color
						</option>
						{/* array of colors coming from color model */}
					</select>
				</div>
				<div className="form-control w-full max-w-lg">
					<label htmlFor="opening" className="label">
						<span className="label-text">Opening Stock</span>
					</label>
					<input
						type="number"
						name="opening"
						id="opening"
						placeholder="opening stock"
						className="input input-secondary input-sm w-full"
					/>
				</div>
				<button
					type="submit"
					className="btn btn-block btn-primary capitalize text-base-100 btn-sm lg:w-1/4 mt-4"
				>
					create
				</button>
			</form>
		</div>
	);
};

export default CreateProduct;
