"use client";

import AuthContainer from "@/common/components/AuthContainer/AuthContainer";
import React from "react";
import styles from "./styles.module.scss";
import Layout from "@/app/layout";
import Image from "next/image";
import {
    Button,
    LinkStyleButton,
    TextInput,
} from "@/common/components/CustomUi/CustomUi";
import Head from "next/head";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import MyModal from "@/common/components/MyModal/MyModal";
import VerifyModal, {
    VerifyStatusType,
} from "@/common/components/VerifyModal/VerifyModal";
import Link from "next/link";

export default function Page() {
    const [loginMode, setLoginMode] = React.useState<"email" | "phoneNumber">(
        "phoneNumber"
    );
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [verifyStatus, setVerifyStatus] =
        React.useState<VerifyStatusType>("nothing");

    const handleToggleLoginTypeBtn = (e: React.MouseEvent) => {
        setLoginMode(loginMode === "email" ? "phoneNumber" : "email");
        console.log(e);
    };

    return (
        <AuthContainer>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Image
                        alt="a"
                        src="/icons/login icon.svg"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <h1 className={styles.title}>ورود به حساب کاربری</h1>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.tip}>
                        برای استفاده از امکانات اپلیکیشن، لطفاً{" "}
                        {loginMode === "phoneNumber" ? (
                            <>
                                شماره موبایل
                                <BsTelephoneFill size={16} />
                            </>
                        ) : (
                            <>
                                ایمیل <MdEmail size={16} />
                            </>
                        )}{" "}
                        خود را وارد کنید
                    </p>
                    <div
                        className={styles.phoneNumber}
                        style={{
                            right: loginMode === "phoneNumber" ? 0 : 500,
                            height:
                                loginMode === "phoneNumber"
                                    ? "max-content"
                                    : "0",
                        }}
                    >
                        <div className={styles.prefix}>+98</div>
                        <TextInput
                            className={styles.textInput}
                            placeholder="9120000000"
                            disabled={loginMode !== "phoneNumber"}
                        />
                    </div>
                    <div
                        className={styles.email}
                        style={{
                            left: loginMode === "email" ? 0 : 500,
                            height: loginMode === "email" ? "max-content" : "0",
                        }}
                    >
                        <TextInput
                            placeholder="example@mail.com"
                            className={styles.textInput}
                            disabled={loginMode !== "email"}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        تایید
                    </Button>
                    <LinkStyleButton
                        style={{ marginTop: 15 }}
                        onClick={handleToggleLoginTypeBtn}
                    >
                        ورود با{" "}
                        {loginMode === "email" ? "شماره موبایل" : "ایمیل"}
                    </LinkStyleButton>

                    <Link
                        href="/auth/signUp"
                        style={{ marginTop: 15, fontSize: 12 }}
                    >
                        !حساب کاربری ندارم
                    </Link>
                </div>
            </div>
            <VerifyModal
                isShow={showModal}
                onCheckBtn={(e, v) => {
                    // const values
                    setVerifyStatus("correct");
                }}
                verifyStatus={verifyStatus}
            />
        </AuthContainer>
    );
}

function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
