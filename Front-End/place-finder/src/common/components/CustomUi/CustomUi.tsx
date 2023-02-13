"use client";
import React from "react";
import styled from "styled-components";

const colors = {
    primary: "#2E8BC0",
    secondary: "#145DA0",
    highlight: "#B1D4E0",

    white: "#fff",
    red: "#f94144",
    green: "#43aa8b",
    orange: "#f8961e",
    yellow: "#f9c74f",
    gray: "#577590",
};

const TextInput = styled.input<{ inValid?: boolean }>`
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => (props.inValid ? colors.red : colors.primary)};
    outline: none;
    border-radius: 5px;
    padding: 2px 9px;
    margin: 5px;
    letter-spacing: 0.4px;
    box-shadow: 0 0 0 0px
        ${props => (props.inValid ? colors.red : colors.primary)};
    transition: box-shadow 0.1s;

    font-size: 15px;
    &:focus {
        box-shadow: 0 0 0 1px
            ${props => (props.inValid ? colors.red : colors.primary)};
    }

    &::placeholder {
        color: ${colors.gray};
        opacity: 0.6;
    }
`;

export const Select = styled.select<{ inValid?: boolean }>`
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => (props.inValid ? colors.red : colors.primary)};
    outline: none;
    border-radius: 5px;
    padding: 2px 9px;
    margin: 5px;
    letter-spacing: 0.4px;
    box-shadow: 0 0 0 0px
        ${props => (props.inValid ? colors.red : colors.primary)};
    transition: box-shadow 0.1s;
    background-color: #fff;
    font-size: 15px;
    &:focus {
        box-shadow: 0 0 0 1px
            ${props => (props.inValid ? colors.red : colors.primary)};
    }

    &::placeholder {
        color: ${colors.gray};
        opacity: 0.6;
    }
`;

interface IButton {
    typeMode?: "primary" | "red" | "green" | "gray" | "yellow" | "orange";
}

export const Button = styled.button<IButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: content;
    width: 100%;
    border: 0;
    padding: 2px 10px;
    border-radius: 5px;
    outline: none;
    color: white;
    margin: 5px;
    font-size: 0.9em;
    font-weight: bold;
    background-color: ${props => colors[props.typeMode ?? "primary"]};
    transition: filter 0.2s;
    &:hover {
        cursor: pointer;
        background-color: ${props => colors[props.typeMode ?? "primary"]};
        filter: saturate(1.8);
    }

    &:focus {
        cursor: pointer;
        background-color: ${props => colors[props.typeMode ?? "primary"]};
        filter: saturate(1.8);
        box-shadow: 0 0 0px 2px ${colors.primary};
    }

    &:disabled {
        filter: grayscale(100%);
        cursor: no-drop;
    }
`;

// let a:"primary" | "red" | "green" | "gray" | "yellow" | "orange" = "gray";

export const LinkStyleButton = styled.button<IButton>`
    width: 100%;
    height: max-content !important;
    border: 0;
    padding: 0 !important;
    line-height: 0;
    outline: none;
    color: ${props => colors[props.typeMode ?? "primary"]};
    margin: 5px;
    font-size: 0.7em;
    font-weight: bolder;
    transition: filter 0.2s;
    letter-spacing: normal;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        filter: saturate(1.4);
    }
`;

export { TextInput };
