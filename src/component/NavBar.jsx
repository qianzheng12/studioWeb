import React from 'react'
import Button from "@material-ui/core/Button";
import './NavBar.css'
const NavBar = ({scrolledToTop}) => {
    return (
        <React.Fragment >
             <div className='initialNavBar' id={scrolledToTop?"initialNavBarIn":"initialNavBarOut"}><Button type="submit"><span>联系我们</span></Button></div>
             <div className='whiteNavBar' id={!scrolledToTop?"whiteNavBarIn":"whiteNavBarOut"}> <Button type="submit"><span>联系我们</span></Button></div>
        </React.Fragment>
    )
};

export default NavBar
