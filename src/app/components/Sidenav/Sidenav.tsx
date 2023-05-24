import { useEffect, useState } from 'react'
import './Sidenav.scss'

import SidenavItem from "./components/SidenavItem/SidenavItem"
import axios from 'axios'
import { environment } from '../../../environment'
import SidenavSearch from './components/SidenavSearch/SidenavSearch'

const Sidenav = () => {
    const [keys, setKeys] = useState<string[]>([])
    const fetchTerm = (term: string) => {
        axios.get<string[]>(environment.getKeys+"?contains="+term)
            .then(res => setKeys(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchTerm('')
    }, [])

    return (
        <div className='sidenav_area'>
            <SidenavSearch onChange={fetchTerm}/>
            <div className="sidenav_items_area">
                {
                    keys && keys.map(((k, i) => {
                        return <SidenavItem key={i} itemlabel={k} />
                    }))
                }
            </div>
        </div>
            
    )
}

export default Sidenav