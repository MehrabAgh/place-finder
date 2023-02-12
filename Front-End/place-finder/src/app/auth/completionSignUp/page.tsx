"use client";

import AuthContainer from "@/common/components/AuthContainer/AuthContainer";
import React from "react";
import styles from "./styles.module.scss";
import Layout from "@/app/layout";
import Image from "next/image";
import {
    Button,
    LinkStyleButton,
    Select,
    TextInput,
} from "@/common/components/CustomUi/CustomUi";
import { FaRegIdCard } from "react-icons/fa";
import Link from "next/link";
import LabeledInput from "@/common/components/LabeledInput/LabeledInput";
import LabeledSelect from "@/common/components/LabeledSelect/LabeledSelect";

type Props = {};

export default function Page({}: Props) {
    return (
        <Layout>
            <AuthContainer>
                <div className={styles.rootContainer}>
                    <div className={styles.top}>
                        <FaRegIdCard className={styles.icon} />
                        <h1 className={styles.title}>
                            تکمیل مشخصات حساب کاربری
                        </h1>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.container}>
                            <LabeledInput placeholder="نام" labelText="نام" />
                            <LabeledInput
                                placeholder="نام خانوادگی"
                                labelText="نام خانوادگی"
                            />
                            <div className={styles.phoneNumber}>
                                <div className={styles.prefix}>+98</div>
                                <TextInput
                                    className={styles.textInput}
                                    placeholder="9120000000"
                                />
                            </div>
                            <LabeledInput
                                placeholder="example@mail.com ایمیل"
                                labelText="ایمیل"
                            />
                            <LabeledSelect labelText="شهر">
                                <option>تهران</option>
                                <option>شیراز</option>
                                <option>اصفهان</option>
                                <option>گنبدکاووس</option>
                            </LabeledSelect>
                            <Button
                                onClick={() => {
                                    // setShowModal(true);
                                }}
                            >
                                تایید
                            </Button>
                        </div>
                    </div>
                </div>
            </AuthContainer>
        </Layout>
    );
}
