import React from "react";

function LoadingList(Component) {
    return function LoadingList({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return(
            <p>Estamos cargando la información</p>
        );
    };
}
export default LoadingList;