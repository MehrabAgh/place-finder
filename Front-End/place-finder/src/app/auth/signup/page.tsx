"use client";

import React from "react";
import Layout from "@/app/layout";
import AuthContainer from "@/common/components/AuthContainer/AuthContainer";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.scss";
import {
    Button,
    LinkStyleButton,
    TextInput,
} from "@/common/components/CustomUi/CustomUi";
import VerifyModal, {
    VerifyStatusType,
} from "@/common/components/VerifyModal/VerifyModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const [signUpMode, setSignUpMode] = React.useState<"email" | "phoneNumber">(
        "phoneNumber"
    );
    const [verifyStatus, setVerifyStatus] =
        React.useState<VerifyStatusType>("nothing");
    const [showModal, setShowModal] = React.useState<boolean>(false);

    const router = useRouter();

    const handleToggleSignUpModeBtn = React.useCallback(() => {
        setSignUpMode(signUpMode === "email" ? "phoneNumber" : "email");
        console.log("test");
    }, [signUpMode]);

    return (
            <AuthContainer>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <Image
                            alt="a"
                            src="/icons/signup.svg"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                        <h1 className={styles.title}>ایجاد حساب کاربری</h1>
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.tip}>
                            برای ورود و استفاده از امکانات اپلیکیشن، لطفاً اول
                            ثبت نام کنید.
                        </p>
                        <div
                            className={styles.phoneNumber}
                            style={{
                                right: signUpMode === "phoneNumber" ? 0 : 500,
                                height:
                                    signUpMode === "phoneNumber"
                                        ? "max-content"
                                        : "0",
                            }}
                        >
                            <div className={styles.prefix}>+98</div>
                            <TextInput
                                className={styles.textInput}
                                placeholder="9120000000"
                                disabled={signUpMode !== "phoneNumber"}
                            />
                        </div>
                        <div
                            className={styles.email}
                            style={{
                                left: signUpMode === "email" ? 0 : 500,
                                height:
                                    signUpMode === "email"
                                        ? "max-content"
                                        : "0",
                            }}
                        >
                            <TextInput
                                placeholder="example@mail.com"
                                className={styles.textInput}
                                disabled={signUpMode !== "email"}
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
                            onClick={handleToggleSignUpModeBtn}
                        >
                            ثبت نام با{" "}
                            {signUpMode === "email" ? "شماره موبایل" : "ایمیل"}
                        </LinkStyleButton>
                        <Link
                            href="/auth/login"
                            style={{
                                marginTop: 15,
                                fontSize: 12,
                                direction: "rtl",
                            }}
                        >
                            حساب کاربری دارم می خواهم وارد بشم.
                        </Link>
                    </div>
                </div>
                <VerifyModal
                    isShow={showModal}
                    onCheckBtn={(e, v) => {
                        // const values
                        setVerifyStatus("correct");
                        setTimeout(() => {
                            router.push("/auth/completionSignUp");
                        }, 2000);
                    }}
                    verifyStatus={verifyStatus}
                />
            </AuthContainer>
    );
}
