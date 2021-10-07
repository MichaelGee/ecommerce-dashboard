import React, { useState, useMemo, useCallback, createContext } from 'react';

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState<boolean>(false);

    const closeModal = useCallback(() => setModal(false), []);
    const toggleModal = useCallback(() => setModal(v => !v), []);


    const providerValue = useMemo(() => ({ closeModal, modal, toggleModal, }), [closeModal, modal, toggleModal]);

    return <ModalContext.Provider value={providerValue}>{children}</ModalContext.Provider>
}