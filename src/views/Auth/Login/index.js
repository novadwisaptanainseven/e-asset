/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Col,
} from "reactstrap";

const Login = () => {
	return (
		<>
			<Col lg="5" md="7">
				<Card className="bg-secondary shadow border-0">
					<CardHeader className="bg-transparent pb-4">
						<div className="text-muted text-center mt-2">
							<h1><span className="font-weight-normal">Login</span> Administrator</h1>
						</div>
					</CardHeader>
					<CardBody className="px-lg-5 py-lg-5">
						<Form role="form">
							<FormGroup className="mb-3">
								<InputGroup className="input-group-alternative">
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="ni ni-single-02" />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder="Username"
										type="text"
										autoComplete="new-email"
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className="input-group-alternative">
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="ni ni-lock-circle-open" />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder="Password"
										type="password"
										autoComplete="new-password"
									/>
								</InputGroup>
							</FormGroup>
							<div className="custom-control custom-control-alternative custom-checkbox">
								<input
									className="custom-control-input"
									id=" customCheckLogin"
									type="checkbox"
								/>
							</div>
							<div className="text-center">
								<Button className="my-2" color="primary" type="button">
									Login
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
				{/* <Row className="mt-3 justify-content-center">
					<Col className="text-center" xs="6">
						<a
							className="text-light"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
						>
							<small>Create new account</small>
						</a>
					</Col>
				</Row> */}
			</Col>
		</>
	);
};

export default Login;
