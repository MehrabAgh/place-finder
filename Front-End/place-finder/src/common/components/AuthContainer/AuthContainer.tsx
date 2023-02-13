"use client";
import RootLayout from "@/app/layout";
import React from "react";
import styles from "./styles.module.scss";

interface IAuthContainer extends React.ComponentPropsWithoutRef<"div"> {}

export default function AuthContainer({
    style = {},
    children,
}: IAuthContainer) {
    return (
        <div className={styles.container} style={style ?? {}}>
            <div className={styles.into}>{children ?? ""}</div>
        </div>
    );
}
