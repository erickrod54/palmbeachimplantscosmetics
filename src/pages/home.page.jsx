import React from "react";
import { Content, FooterComponent, MyWork, NavBar } from "../components/index.components";


const HomePage = () => {

    return(
        <>
            <NavBar />
            <Content />
            <MyWork />
            <FooterComponent />
        </>
    )
}

export default HomePage;