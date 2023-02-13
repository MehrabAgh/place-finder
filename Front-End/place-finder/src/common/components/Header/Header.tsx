import React from 'react'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { IoPersonSharp } from 'react-icons/io5'
import { Button } from '../CustomUi/CustomUi'
import styles from "./styles.module.scss";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.container}>
    <div className={styles.content}>
        <div className={styles.left}>
            <Button className={styles.newAdBtn}>
                ثبت آگهی
            </Button>
            <Button className={styles.otherBtn}>
                پشتیبانی
            </Button>
            <Button className={styles.otherBtn}>
                چت
                <div className={styles.icon}>
                    <BsFillChatLeftTextFill />
                </div>
            </Button>
            <Button className={styles.otherBtn}>
                حساب من
                <div className={styles.icon}>
                    <IoPersonSharp />
                </div>
            </Button>
        </div>

        <div className={styles.right}></div>
    </div>
</header>
  )
}