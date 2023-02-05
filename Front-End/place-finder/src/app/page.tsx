import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "./layout";
import styles from "./page.module.css";

export default function Home() {
    return (
        <Layout>
            <h1 style={{ background: "red" }}>home</h1>
        </Layout>
    );
}
