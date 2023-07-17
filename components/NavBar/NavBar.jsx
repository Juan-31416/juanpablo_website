import React, {useState} from "react";
import Image from "next/image";

//Internal import
import Style from "./NavBar.module.css";
import {Menu, Language} from "./index";
import images from "../../img";
import {Button} from "../Components_index";

function NavBar() {
    //---USESTATE COMPONENTS---
    const [menu, setSideMenu] = useState(false);
    const [language, setLanguage] = useState(false);

    const openSubmenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Menu") {
            setSideMenu(true);
            setLanguage(false);
        } else if (btnText == "Language") {
            setSideMenu(false);
            setLanguage(true);
        } else {
            setSideMenu(false);
            setLanguage(false);
        }
    };

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                {/**START OF THE LEFT SECTION */}
                <div className={Style.navbar_container_left}>
                    {/**SIDE MENU BUTTON */}
                    <div className={Style.navbar_container_left_menu}>
                        <p onClick={(e) => openSubmenu(e)}>Menu
                            {/**INSERTAR IMAGEN TRES RAYAS */}
                        </p>
                        {menu && (
                            <div className={Style.navbar_container_left_menu_box}>
                                <Menu />
                            </div>
                        )}
                    </div>
                    {/**LOGO (centered)*/}
                    <div className={Style.logo}>
                        <Image
                            src={images.logo}
                            alt="Juan Pablo Martin"
                            width={500}
                            height={100} />
                    </div>
                </div>

                {/**START OF THE RIGTH SECTION */}
                <div className={Style.navbar_container_right}>
                    {/**Language BUTTON */}
                    <div className={Style.navbar_container_right_language}>
                        <p onClick={(e) => openSubmenu(e)}>Language
                            {/**INSERTAR IMAGEN BANDERA */}
                        </p>
                        {language && (
                            <div className={Style.navbar_container_right_language_box}>
                                <Language />
                            </div>
                        )}
                    </div>

                    {/**RRSS BUTTON
             * Confirm how to do this
            */}
                    <div className={Style.navbar_container_right_rrss}>
                        <div>
                            RRSS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;