import React from "react";

const useHandleClickOutside = (refLink, currentPopupRef, callback) => {

    React.useEffect(() => {

        const handleClickOutside = (event) => {

            if (event.target !== refLink.current && !event.composedPath().includes(currentPopupRef.current)) {
                callback()
            }
        }
        document.body.addEventListener('click', handleClickOutside)

        return () => document.body.removeEventListener('click', handleClickOutside)

    }, [])
}

export default useHandleClickOutside;

