import React from "react";
import { Button } from "../CustomUi/CustomUi";
import MyModal from "../MyModal/MyModal";
import styles from "./styles.module.scss";
import { AiOutlineLoading } from "react-icons/ai";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import SimpleLoading from "../SimpleLoading/SimpleLoading";

export type VerifyStatusType = "correct" | "inCorrect" | "nothing";

interface IVerifyModal {
    isShow?: boolean;
    onCheckBtn?: (e: React.MouseEvent, verifyCodeValue: string) => any;
    verifyStatus?: VerifyStatusType;
}

const codes: number[] = [];

export default function VerifyModal(props: IVerifyModal) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [currentId, setCurrentId] = React.useState<string>("");
    const [checkBtnActive, setCheckBtnActive] = React.useState(false);

    const inputRef0 = React.useRef<HTMLInputElement>(null);
    const inputRef1 = React.useRef<HTMLInputElement>(null);
    const inputRef2 = React.useRef<HTMLInputElement>(null);
    const inputRef3 = React.useRef<HTMLInputElement>(null);
    const { isShow } = props;

    const isAllInputFulled = React.useCallback(() => {
        if (
            inputRef0.current?.value.length !== 0 &&
            inputRef1.current?.value.length !== 0 &&
            inputRef2.current?.value.length !== 0 &&
            inputRef3.current?.value.length !== 0
        ) {
            setCheckBtnActive(true);
        } else {
            setCheckBtnActive(false);
        }
    }, []);

    const handleFocus = React.useCallback(
        (e: React.FocusEvent<HTMLInputElement>) => {
            setCurrentId(e.target.id);
            e.target.select();
        },
        []
    );

    const handleKeyDownVerifyCode = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];
        console.log(e.code);
        if (
            currentId! !== "#code0" &&
            e.code === "Backspace" &&
            inputRefs[Number(currentId![currentId!.length - 1])].current
                ?.value === ""
        ) {
            const inputRef =
                inputRefs[Number(currentId![currentId!.length - 1]) - 1];
            inputRef.current?.focus();
            console.log("back back");
        }
    };

    const handleChangeVerifyCode = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];

            // console.log(e.target?.id);

            const currentId = e.target?.id;
            e.target.value = e.target.value.replace(/\D/g, "");
            e.target.value = e.target.value.substring(0, 1);

            // const inputRef = inputRefs[Number(currentId[currentId.length - 1])];
            if (
                currentId[currentId.length - 1] !== "3" &&
                e.target.value !== ""
            ) {
                const nextInputRef =
                    inputRefs[Number(currentId[currentId.length - 1]) + 1];
                nextInputRef.current?.focus();
            }

            isAllInputFulled();
        },
        []
    );

    const handleCheckBtn = React.useCallback((e: React.MouseEvent) => {
        if (
            inputRef0.current?.value !== "undefined" &&
            typeof inputRef1.current?.value !== "undefined" &&
            typeof inputRef2.current?.value !== "undefined" &&
            typeof inputRef3.current?.value !== "undefined" &&
            inputRef0.current?.value.length !== 0 &&
            inputRef1.current?.value.length !== 0 &&
            inputRef2.current?.value.length !== 0 &&
            inputRef3.current?.value.length !== 0
        ) {
            const verifyCodeValue =
                inputRef0?.current?.value +
                inputRef1?.current?.value +
                inputRef2?.current?.value +
                inputRef3?.current?.value;
            if (typeof props.onCheckBtn !== "undefined")
                props.onCheckBtn(e, verifyCodeValue);
        }
    }, []);

    React.useEffect(() => {
        isAllInputFulled();
    }, [isShow]);

    return (
        <MyModal isShow={isShow} overlayStyle={{ backdropFilter: "blur(2px)" }}>
            <div className={styles.container}>
                <div className={styles.title}>کد اعتبار سنجی</div>
                <div className={styles.inputsContainer}>
                    <input
                        type="text"
                        maxLength={9}
                        ref={inputRef0}
                        onFocus={handleFocus}
                        onChange={handleChangeVerifyCode}
                        onKeyDown={handleKeyDownVerifyCode}
                        id={"#code0"}
                    />
                    <input
                        type="text"
                        maxLength={9}
                        ref={inputRef1}
                        onFocus={handleFocus}
                        onChange={handleChangeVerifyCode}
                        onKeyDown={handleKeyDownVerifyCode}
                        id={"#code1"}
                    />
                    <input
                        type="text"
                        maxLength={9}
                        ref={inputRef2}
                        onFocus={handleFocus}
                        onChange={handleChangeVerifyCode}
                        onKeyDown={handleKeyDownVerifyCode}
                        id={"#code2"}
                    />
                    <input
                        type="text"
                        maxLength={9}
                        ref={inputRef3}
                        onFocus={handleFocus}
                        onChange={handleChangeVerifyCode}
                        onKeyDown={handleKeyDownVerifyCode}
                        id={"#code3"}
                    />
                </div>
                <div className={styles.bottom}>
                    <div className={styles.tip}>
                        کدی که جهت اعتبار سنجی برای <b>شماره تلفن</b> شما ارسال
                        شد را وارد کنید
                    </div>
                    <Button onClick={handleCheckBtn} disabled={!checkBtnActive}>
                        بررسی
                        <SimpleLoading show={isLoading} />
                    </Button>
                </div>
            </div>
            {props.verifyStatus === "nothing" ||
            typeof props.verifyStatus === "undefined" ? (
                ""
            ) : (
                <div
                    className={`${styles.resultAlert} ${
                        props.verifyStatus === "correct"
                            ? styles.correctResult
                            : styles.errorResult
                    }`}
                >
                    <div className={styles.text}>
                        {props.verifyStatus === "correct"
                            ? "کد اعتبار سنجی تایید شد"
                            : "کد نامعتبر"}
                    </div>
                    {props.verifyStatus === "correct" ? (
                        <AiFillCheckCircle />
                    ) : (
                        <AiFillCloseCircle />
                    )}
                </div>
            )}
        </MyModal>
    );
}
