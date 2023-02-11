"use client";
import React from "react";
import { Button } from "../CustomUi/CustomUi";
import styles from "./style.module.scss";
import { GoAlert } from "react-icons/go";
import { MdError } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

interface IMyModal {
    title?: string;
    description?: string;
    onOkBtn?: React.MouseEventHandler;
    onNoBtn?: React.MouseEventHandler;
    onOtherBtn?: React.MouseEventHandler;
    mode?: "warn" | "err" | "succ" | "normal";
    buttons?: {
        txt: string;
        typeMode: "primary" | "red" | "green" | "gray" | "yellow" | "orange";
        onClick: React.MouseEventHandler;
    }[];
    isShow?: boolean;
    children?: React.ReactNode;
    overlayStyle?: React.CSSProperties
    onOverlayClick?: React.MouseEventHandler;
}

const colors = {
    primary: "#2E8BC0",
    primaryTransparent: "#2e8bc034",
    secondary: "#145DA0",
    highlight: "#B1D4E0",

    white: "#fff",
    red: "#f94144",
    redTransparent: "#f9414449",
    green: "#43aa8b",
    greenTransparent: "#43aa8b30",
    orange: "#f8961e",
    yellow: "#d4a22c",
    yellowTransparent: "#f9c64f2f",
    gray: "#577590",
};

function MyModal(props: IMyModal) {
    const color1 = (function () {
        switch (props.mode ?? "normal") {
            case "err":
                return colors.red;
            case "warn":
                return colors.yellow;
            case "succ":
                return colors.green;
            case "normal":
                return colors.primary;
        }
    })();

    const colorTransparent = (function () {
        switch (props.mode ?? "normal") {
            case "err":
                return colors.redTransparent;
            case "warn":
                return colors.yellowTransparent;
            case "succ":
                return colors.greenTransparent;
            case "normal":
                return colors.primaryTransparent;
        }
    })();

    return (
        <>
            {props.isShow ? (
                <div className={styles.overlay} style={props.overlayStyle} onClick={props.onOverlayClick}>
                    <div className={styles.modalContainer} onClick={()=>{}}>
                        {props.children ?? (
                            <>
                                <div
                                    className={styles.title}
                                    style={{
                                        background: colorTransparent,
                                        color: color1,
                                    }}
                                >
                                    تیتر
                                    <div className={styles.icon}>
                                        {props.mode === "normal" ? (
                                            <BsFillCircleFill />
                                        ) : props.mode === "err" ? (
                                            <MdError />
                                        ) : props.mode === "succ" ? (
                                            <AiFillCheckCircle />
                                        ) : props.mode === "warn" ? (
                                            <GoAlert />
                                        ) : (
                                            <BsFillCircleFill />
                                        )}
                                    </div>
                                </div>
                                <div className={styles.content}>محتوا</div>
                                <div className={styles.action}>
                                    {typeof props.buttons !== "undefined" ? (
                                        props.buttons?.map(item => (
                                            <>
                                                <Button
                                                    typeMode={item.typeMode}
                                                    onClick={item.onClick}
                                                >
                                                    {item.txt}
                                                </Button>
                                            </>
                                        ))
                                    ) : (
                                        <>
                                            {" "}
                                            <Button
                                                typeMode="primary"
                                                onClick={props.onOkBtn}
                                            >
                                                ادامه
                                            </Button>
                                            <Button
                                                typeMode="red"
                                                onClick={props.onNoBtn}
                                            >
                                                لغو
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default MyModal;
