"use client";

import { useEffect, useState } from "react";

export default function Dashboard(){
    const [expenses, setExpenses] = useState([]);

    useEffect(()=> {
        fetch("/api/expenses")
        .then(res => res.json())
        .then(data => setExpense(data));
    }, []);

    return(
        <div>
            <h1>Dashboard</h1>
            <ul>
                {
                    expenses.map((e) => (
                        <li key={e._id}>{e.titlr} - {e.amount}</li>
                    ))
                }
            </ul>
        </div>
    )
}