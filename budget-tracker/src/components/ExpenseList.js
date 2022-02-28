import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setFilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (e) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(e.target.value)
		);
		setFilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				className='form-control mb-3'
				placeholder='Type to Search...'
				onChange={handleChange}
			/>
			<ul className='list-group'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
