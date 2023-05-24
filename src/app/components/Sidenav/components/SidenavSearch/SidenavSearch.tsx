import { FC, useState } from 'react'
import './SidenavSearch.scss'

export interface SidenavSearchProps {
    onChange?: (term: string) => void
}

const SidenavSearch: FC<SidenavSearchProps> = (props: SidenavSearchProps) => {
    const [term, setTerm] = useState('')
    return (
        <div className='search_area'>
            <input type='text' value={term} onChange={(e) => {
                props.onChange && props.onChange(e.target.value)
                setTerm(e.target.value)
            }}></input>
        </div>
    )
}

export default SidenavSearch