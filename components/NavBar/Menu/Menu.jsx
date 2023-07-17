import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Menu.module.css";

const Menu = () => {
    
    //---NAVIGATION MENU---
    const menu = [
        {
            name: "Sobre mí",
            link: "sobre-mi",
        },
        {
            name: "Proyectos en marcha",
            link: "proyectos-en-marcha",
        },
        {
            name: "Proyectos terminados",
            link: "proyectos-terminados",
        },
        {
            name: "Inverisones",
            link: "inversiones",
        },
        {
            name: "Automoción",
            link: "automocion",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];
    
    return(
        <div>
            {menu.map((el, i) => (
                <div key={i + 1} className={Style.menu}>
                    <Link href={{pathname: '${el.link}'}}>{el.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Menu;