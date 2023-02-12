import React from "react";
import { TextInput } from "../CustomUi/CustomUi";
import styles from "./styles.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string ;
    containerStyle?: React.CSSProperties;
    invalid?: boolean;
}

export default function LabeledInput(props: IProps) {
    const [isFocus, setIsFocus] = React.useState<boolean>(false);
    const { labelText, containerStyle, invalid, ...inputProps } = props;

    const handleFocus = React.useCallback(
        (e: React.FocusEvent<HTMLInputElement, Element>) => {
          if(e.target.value.length !== 0){
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
        (e: React.FocusEvent<HTMLInputElement, Element>) => {
            setIsFocus(false);

            // alert("blur");
            if (typeof props.onBlur !== "undefined") {
                props.onBlur(e);
            }
        },
        []
    );

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target.value.length !== 0){
        setIsFocus(true);
      }
    }

    React.useEffect(() => {
        console.log(isFocus);
    }, [isFocus]);

    return (
        <div className={styles.container} style={containerStyle}>
            <label className={isFocus?"":styles.hidden}>{labelText}</label>
            <TextInput
                inValid={invalid}
                className={styles.textInput}
                {...inputProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
        </div>
    );
}
