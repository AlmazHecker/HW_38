import React from "react";
import './ExpensesFilter.css';

function ExpensesFilter (props){
    // TODO: передаем год который мы выбрали в expenses.js
    const selectChangeHundler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectChangeHundler}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;