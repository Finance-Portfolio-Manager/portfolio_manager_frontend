import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'

const CustomToggle = React.forwardRef((props, ref) => (
    <div
        href=""
        className={props.linkClass}
        ref={ref}
        onMouseEnter={(e) => {
            if (props.showOnHover && props.onClick)
                props.onClick(e);
        }}
    >
        {props.children}
    </div>
));

export default function NavDropDown(props) {
    return (
        <Dropdown onMouseLeave={props.unhovered} className={"" + props.className}>
            <Dropdown.Toggle onClick={props.hovered} as={CustomToggle} showOnHover={true} linkClass={"btn rounded-0 " + (props.show ? "navhighlight" : "")} id="dropdown-basic">
                <span className="text-white">{props.title}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu onAnimationEnd={props.onAnimationEnd} show={props.show} className={props.className + " p-0 m-0"}>
                {props.children}
            </Dropdown.Menu>
        </Dropdown>
    );
}