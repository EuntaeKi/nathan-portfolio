import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const ArcadersFooter = () => {
    const location = useLocation();

    return (
        <nav className="flex flex-col md:flex-row items-center justify-around gap-8 bg-black text-white py-8 sm:py-24">
            <Link to="/home" className={location.pathname === "/about" ? 'invisible' : ''}>
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo_Nathan-Seung" />
            </Link>
            <div className="flex gap-8 font-clash-regular text-2xl flex-wrap justify-center">
                <div className="flex flex-col">
                    <NavLink
                        to="/home"
                        className="font-clash-regular opacity-60"
                    >
                        Home
                    </NavLink>
                </div>
                <div className="flex flex-col">
                    <NavLink
                        to="/about"
                        className="font-clash-regular opacity-60"
                    >
                        About
                    </NavLink>
                </div>
                <div className="flex flex-col">
                    <NavLink
                        to="/projects"
                        className="font-clash-regular opacity-60"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/projects/arcaders-app"
                        className="font-clash-regular"
                    >
                        Arcaders App
                    </NavLink>
                    <NavLink
                        to="/projects/arcaders-website"
                        className="font-clash-regular"
                    >
                        Arcaders Website
                    </NavLink>
                </div>
                <div className="flex flex-col">
                    <NavLink
                        to="/"
                        className="font-clash-regular opacity-60"
                    >
                        Contact
                    </NavLink>
                    <a
                        href="https://www.linkedin.com/in/jeonghaseung/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-clash-regular flex items-center"
                    >
                        LinkedIn
                        <span className="material-symbols-outlined text-xl mb-0 ml-1">open_in_new</span>
                    </a>
                    <a
                        href={`${process.env.PUBLIC_URL}/files/JeongHa_Seung CV Resume (UX).pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-clash-regular flex items-center"
                    >
                        <div className="">Resume</div>
                        <div className="material-symbols-outlined text-xl mb-0 ml-1">open_in_new</div>
                    </a>
                    <a
                        href="mailto:jeungha89@gmail.com"
                        className="font-clash-regular flex items-center"
                    >
                        Email
                        <span className="material-symbols-outlined text-xl mb-0 ml-1">open_in_new</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default ArcadersFooter;