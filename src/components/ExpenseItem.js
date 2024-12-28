import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

let ExpenseItem = (props) => {
    let [title, setTitle] = useState(props.expTitle);

    return (
        <div className="expense-item">
            <div><ExpenseDate expDate={props.expDate} /></div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">{props.expAmount}</p>
            </div>
            <button
                onClick={() => props.onDelete(props.expTitle)}
                className="btn btn-danger"
            >
                Delete
            </button>
        </div>
    );
};

export default ExpenseItem;
