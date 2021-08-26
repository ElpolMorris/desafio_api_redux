import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actualPage } from "../../store/users/actions";
import { usersSelector } from "../../store/users/selector";
const Pagination = () => {
	const users = useSelector(usersSelector);
	const dispatch = useDispatch()
	let limit = 10;
	let pages = Math.ceil(users.length / limit);
	let countPages = [];
	for (let i = 0; i < pages; i++) {
		countPages.push(i + 1);
	}
	const changePage = (numberPage) => {
		dispatch(actualPage(numberPage))		
	}
	return (
		<nav className="d-flex justify-content-center">
			<ul className="pagination pagination-sm">
				{countPages.map((c, i) => {
					return (
						<li className="page-item" key={i}>
							<span className="page-link" onClick={()=>changePage(c)}>{c}</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
