import {useEffect} from "react";

export default function AutoPlayer() {
    useEffect(() => {
        // ✅ Define the async function here
        async function St2() {
            setTimeout(() => {
                const videoElement = document.getElementById('video');
                if (videoElement.playing) {
                    // video is already playing so do nothing
                } else {
                    // video is not playing
                    // so play video now
                    videoElement.play();
                }
            }, 3000)
        }

        St2();

    }, []);

    return <></>
}