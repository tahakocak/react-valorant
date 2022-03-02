import React, {useEffect} from "react";
import ContentLoader from "react-content-loader";

function Index() {

    const Loader = (props) => (
        <ContentLoader
            speed={2}
            width="100%"
            height={150}
            viewBox="0 0 400 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="3" y="17" rx="0" ry="0" width="100%" height="217" />
        </ContentLoader>
    )

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.body.appendChild(script);
    }, [window.onload]);

    return (<>

        <div className="twitter-iframe">
            <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/PlayVALORANT?ref_src=twsrc%5Etfw">Tweets by PlayVALORANT</a>
        </div>
    </>)
}

export default Index