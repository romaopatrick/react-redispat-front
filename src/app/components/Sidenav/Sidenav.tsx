import { useEffect, useState } from 'react'
import './Sidenav.scss'

import SidenavItem from "./components/SidenavItem/SidenavItem"
import axios, { AxiosError, HttpStatusCode } from 'axios'
import { environment } from '../../../environment'
import SidenavSearch from './components/SidenavSearch/SidenavSearch'
import { useSelectedKey } from '../../contexts/SelectedValueContext/SelectedValueContext'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

const Sidenav = () => {

    const { key } = useSelectedKey()
    const [term, setTerm] = useState<string>('')
    const [keys, setKeys] = useState<string[]>([])
    const [addModalOpen, setAddModelOpen] = useState(false)
    
    useEffect(() => {
        var fetchtimeout = setTimeout(() => {
            axios.get<string[]>(environment.getKeys + `?contains=${term}`)
                .then(res =>
                    setKeys(res.data))
                .catch((e: AxiosError) =>
                    e.response?.status === HttpStatusCode.NotFound
                        ? setKeys([]) : console.log(e))
        }, 400)
        return () => clearTimeout(fetchtimeout)
    }, [term, key])

    return (
        <div className='sidenav_area'>
            <div className='sidenav_search_area'>
                <SidenavSearch term={term} onChange={t => {
                    setTerm(t)
                }} />
                <AiOutlinePlus color='#FFFF' cursor={'pointer'} />
            </div>

            <div className="sidenav_items_area">
                {
                    keys && keys.map(
                        (k, i) => {
                            return <Link key={i} className='sidenav_option' to={`/${k}`}> {
                                key === k
                                    ? <SidenavItem selected itemlabel={k} />
                                    : <SidenavItem itemlabel={k} />
                            }
                            </Link>
                        })
                }
            </div>
        </div>
    )
}

export default Sidenav