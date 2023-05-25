import { useNavigate, useParams } from 'react-router-dom'
import './RedisValuePage.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { environment } from '../../../environment'
import { useSelectedKey } from '../../contexts/SelectedValueContext/SelectedValueContext'
import { AiOutlineSave } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'

export const RedisValuePage = () => {
    const navigate = useNavigate()
    const { k } = useParams()
    const { key, setKey } = useSelectedKey()
    const [val, setVal] = useState('')
    const [initval, setInitVal] = useState('')

    const postNewValue = () => {
        if (val) axios.post(environment.postkey.replace(":key", key), val)
            .catch(() => navigate(''))
        else axios.delete(environment.deleteKey.replace(":key", key))
            .finally(() => navigate(''))
    }

    useEffect(() => {
        if (k) {
            const fetchvaltimeout = setTimeout(() => {
                axios.get(encodeURI(environment.getValue.replace(":key", k)))
                    .then(r => {
                        const data = typeof (r.data) == 'string' ? r.data : JSON.stringify(r.data)
                        setVal(data)
                        setInitVal(data)
                        setKey(k)
                    }).catch(() => navigate('/'))
            })

            return () => {
                clearTimeout(fetchvaltimeout)
            }
        }
    }, [k, navigate, setKey])

    return (
        <section className='redis_value_page'>
            <div className='toolbar'>
                <div className='toolbar_icon' onClick={() => {
                    postNewValue()
                }}>
                    <AiOutlineSave color='#397006' />
                    save
                </div>
                <div className='toolbar_icon' onClick={() => {
                    setVal(initval)
                }}>
                    <MdOutlineCancel color='#700639' />
                    rollback
                </div>
            </div>
            <textarea className='value_bar_area' value={val} onChange={(e) => setVal(e.target.value)} />
        </section >
    )
}