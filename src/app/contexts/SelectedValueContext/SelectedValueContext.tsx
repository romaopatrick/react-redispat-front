import { ReactNode, createContext, useContext, useState } from "react";

interface IContextProps {
    key: string
    setKey: (k: string) => void 
}

const selectedKeyContext = createContext<IContextProps>({
    key: '',
    setKey: () => {} 
})

export const SelectedKeyContext = ({children}: {
    children: ReactNode
}) => {
    const [key, setKey] = useState('')
    return (
        <selectedKeyContext.Provider value={{
            key,
            setKey,
        }}>
            {children}
        </selectedKeyContext.Provider>
    )
}

export const useSelectedKey = () => useContext(selectedKeyContext)