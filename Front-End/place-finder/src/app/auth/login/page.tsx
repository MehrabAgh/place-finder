import AuthContainer from "@/common/components/AuthContainer/AuthContainer";
import React from "react";
import styles from "./styles.module.scss";
import Layout from "@/app/layout";

export default function index() {
    return (
        <Layout>
            <AuthContainer>
                <div className={styles.login}></div>
            </AuthContainer>
        </Layout>
    );
}
