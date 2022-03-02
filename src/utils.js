import ContentLoader from "react-content-loader";
import React from "react";
import {useNavigate} from "react-router-dom";

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="6" y="-3" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
)

const ListSkeleton = ({listsToRender}) => {
    return (
        <>
            {Array(listsToRender)
                .fill(1)
                .map((card, index) => (
                    <div className="card">
                        <Loader />
                    </div>
                ))}
        </>
    );
};

export {ListSkeleton,Loader}
