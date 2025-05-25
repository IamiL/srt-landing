"use client";
import {useEffect} from "react";

export default function Closer() {

    useEffect(() => {
        async function St() {
            setTimeout(() => {
                document.getElementById("loading").style.display = "none"
                document.body.style.overflowY = "visible";
            }, 2500)
        }

        St();

    }, []);


    return <></>
}