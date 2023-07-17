import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Language.module.css";

const Language = () => {
    //---LANGUAGE MENU---
    const language = [
        {
            name: "Español",
            link: "Espannol",
        },
        {
            name: "English",
            link: "English",
        },
        {
            name: "Deutsch",
            link: "Deutsch",
        },
    ];

    return(
        <div>
            {language.map((el, i)=> (
                <div key={i + 1} className={Style.language}>
                    <Link href={{pathname: '${el.link}'}}>{el.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Language;