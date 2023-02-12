import React from "react";
import { Select } from "../CustomUi/CustomUi";
import styles from "./styles.module.scss";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    labelText?: string;
    containerStyle?: React.CSSProperties;
    invalid?: boolean;
}

export default function LabeledSelect(props: IProps) {
    const [isFocus, setIsFocus] = React.useState<boolean>(false);
    const [isValidOption, setIsValidOption] = React.useState<boolean>(false);
    const { containerStyle, invalid, labelText, children, ...selectProps } =
        props;

    const handleFocus = React.useCallback(
        (e: React.FocusEvent<HTMLSelectElement, Element>) => {
            if (e.target.value.length !== 0) {
                setIsFocus(true);
            }
            // alert("focus");
            if (typeof props.onFocus !== "undefined") {
                props.onFocus(e);
            }
        },
        []
    );

    const handleBlur = React.useCallback(
        (e: React.FocusEvent<HTMLSelectElement, Element>) => {
            setIsFocus(false);

            // alert("blur");
            if (typeof props.onBlur !== "undefined") {
                props.onBlur(e);
            }
        },
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // alert(e.target.value);
        if (typeof props.onChange !== "undefined") {
            props.onChange(e);
        }

        if (e.target.disabled === false) {
            setIsValidOption(true);
        } else setIsValidOption(false);
        // console.log(e.target.disabled)
    };

    React.useEffect(() => {
        console.log(isValidOption)
    }, [isValidOption])
    

    return (
        <div className={styles.rootContainer} style={containerStyle}>
            <label className={isFocus ? "" : styles.hidden}>{labelText}</label>
            <Select
                {...selectProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                inValid={invalid ?? false}
                className={`${styles.select} ${isValidOption?styles.selectedOption:""}`}
                // style={{color: isValidOption? "gray" : "black"}}
            >
                <option disabled selected>
                    {labelText}
                </option>
                {children}
            </Select>
        </div>
    );
}
