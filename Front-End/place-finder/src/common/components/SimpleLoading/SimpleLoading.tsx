import React from "react";
import styles from "./styles.module.scss";
import { AiOutlineLoading } from "react-icons/ai";

interface ISimpleLoading {
    show?: boolean;
    size?: number;
    style?: React.CSSProperties;
}

export default function SimpleLoading({show, size, style}:ISimpleLoading) {
    return (
        <>
        {show?
            <AiOutlineLoading className={styles.loading} size={size??16} style={style??{}} />
        :""}
        </>
    );
}
