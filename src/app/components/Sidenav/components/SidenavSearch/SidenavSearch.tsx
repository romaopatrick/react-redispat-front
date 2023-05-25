import { FC, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SidenavSearch.scss'
import { useSelectedKey } from '../../../../contexts/SelectedValueContext/SelectedValueContext'

export interface SidenavSearchProps {
    className?: string
    onChange?: (term: string) => void
    term?: string
}

const SidenavSearch: FC<SidenavSearchProps> = (props: SidenavSearchProps) => {
    const [term, setTerm] = useState(props.term)
    const {key} = useSelectedKey()

    useEffect(() => setTerm(key), [key])

    return (
        <div className='search_area'>
            <input className='search_input' type='text' value={term} onChange={(e) => {
                props.onChange && props.onChange(e.target.value)
                setTerm(e.target.value)
            }}></input>
            <AiOutlineSearch className="search_icon"/>
        </div>
    )
}

export default SidenavSearch