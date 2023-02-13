"use client";
import Link from "next/link";
import React from "react";
import {
    AiFillInstagram,
    AiOutlineSearch,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import styles from "./page.module.scss";

type Cities = { title: string; link: string }[];

const initCities: Cities = [
    {
        title: "تهران",
        link: "#",
    },
    {
        title: "مشهد",
        link: "#",
    },
    {
        title: "کرج",
        link: "#",
    },
    {
        title: "شیراز",
        link: "#",
    },
    {
        title: "اصفهان",
        link: "#",
    },
    {
        title: "اهواز",
        link: "#",
    },
    {
        title: "تبریز",
        link: "#",
    },
    {
        title: "کرمانشاه",
        link: "#",
    },
    {
        title: "قم",
        link: "#",
    },
    {
        title: "رشت",
        link: "#",
    },
];

export default function Page() {
    const [isFocusSearch, setIsFocusSearch] = React.useState<boolean>();
    const [cities, setCities] = React.useState<Cities>(initCities);

    const handleFocusSearch = React.useCallback(() => {
        setIsFocusSearch(true);
    }, []);

    const handleBlurSearch = React.useCallback(() => {
        setIsFocusSearch(false);
    }, []);

    return (
        <div className={styles.rootContainer}>
            <div className={styles.into}>
                <div className={styles.logo}>
                    <div>محل لوگو</div>
                </div>
                <div className={styles.links}>
                    <Link href="#" className={styles.item}>
                        پشتیبانی
                    </Link>
                    <Link href="#" className={styles.item}>
                        بلاگ
                    </Link>
                    <Link href="#" className={styles.item}>
                        درباره ما
                    </Link>
                    <Link href="#" className={styles.item}>
                        ثبت آگهی
                    </Link>
                </div>
                <div className={styles.someDescription}>
                    place finder، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌! اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی
                    هستی، شهرت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ ها ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد.
                </div>
                <div
                    className={`${styles.search} ${
                        isFocusSearch ? styles.searchFocus : ""
                    }`}
                >
                    <input
                        type={"text"}
                        placeholder={"جست و جوی شهر"}
                        className={styles.inputSearch}
                        onFocus={handleFocusSearch}
                        onBlur={handleBlurSearch}
                    />
                    <AiOutlineSearch className={styles.icon} />
                </div>
                <div className={styles.someCity}>
                    {cities.map((item, index) => (
                        <City title={item.title} link={item.link} key={index} />
                    ))}
                </div>
                <div className={styles.socialMedia}>
                    <Link href={"#"} className={styles.item}>
                        <SiAparat />
                    </Link>
                    <Link href={"#"} className={styles.item}>
                        <AiFillInstagram />
                    </Link>
                    <Link href={"#"} className={styles.item}>
                        <FaTelegramPlane />
                    </Link>
                    <Link href={"#"} className={styles.item}>
                        <AiOutlineTwitter />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function City(props: { title: string; link: string }) {
    return (
        <Link href={"#"} className={styles.item}>
            <h2>{props.title}</h2>
        </Link>
    );
}
