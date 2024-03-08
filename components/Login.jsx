import Image from "next/image";
import React from "react";
import loginImage from "../public/login-page.png";

const Login = () => {
	return (
		<div className="flex items-center justify-center flex-col gap-2 bg-base-100 min-h-screen p-4">
			<h4 className="text-3xl mb-4 text-primary text-center drop-shadow">
				Inventory Management
			</h4>
			<div className="flex flex-col md:flex-row border shadow-inner rounded-xl w-full md:w-3/4 lg:w-1/2 md:py-16 lg:py-16 pt-4">
				<div className="w-full md:w-1/2 carousel-item">
					<Image
						src={loginImage}
						alt="inventory management"
						className="object-cover w-full h-full"
					/>
				</div>
				<form
					action=""
					className="w-full md:w-1/2 p-8 flex justify-center items-center  flex-col gap-5"
				>
					<div className="form-control w-full flex flex-col gap-6">
						<label
							htmlFor="username"
							className="input shadow-inner bg-base-100 flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-6 hidden md:block flex-grow h-6 md:w-4 md:h-4 opacity-70"
							>
								<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
							</svg>
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Username"
								className="grow"
							/>
						</label>
						<label
							htmlFor="password"
							className="input bg-base-100 shadow-inner flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-6 hidden md:block h-6 md:w-4 md:h-4 opacity-70 flex-grow"
							>
								<path
									fillRule="evenodd"
									d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								className="grow"
							/>
						</label>
					</div>
					<div className="form-control w-full md:w-2/4 mt-4">
						<button
							type="submit"
							className="btn btn-primary text-base-100 shadow-inner shadow-primary"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
