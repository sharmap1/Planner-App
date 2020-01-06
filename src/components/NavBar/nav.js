import React from "react";

function Nav(){
    return(

        <div className="navbar-fixed">
            <nav className= "navbar">
                <ul>
                    <li className= "brand">
                        <a href="/" >Planner App</a>
                    </li>
                    <li className= "search">
                        <a href="/tasks">Tasks</a>
                    </li>
                    <li className= "score">
                        <a href="/calendar">Calendar</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;