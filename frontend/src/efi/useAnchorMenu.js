import {useState} from "react";

const useAnchorMenu = function(initialOpen) {
    const [open, setOpen] = useState(initialOpen);

    const toggleOpenMenu = function() {
        setOpen(true);
    };

    const toggleCloseMenu = function() {
        setOpen(false);
    };

    return {
        isOpen: open,
        onOpen: toggleOpenMenu,
        onClose: toggleCloseMenu
    }
};

export default useAnchorMenu;