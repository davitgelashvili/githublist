"use client"

import getUsers from "@/http/users"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import style from './Item.module.css'

const Item = ({item, load}:any) => {
    const [user, setUser] = useState<any>([])

    useEffect(()=>{
        getUsers(`/users/${item.login}`)
        .then(_user => setUser(_user))
    }, [item])
    
    return (
        <div className={style.item}>
            <h2>{user?.name}</h2>
            <Image
                src={item?.avatar_url}
                alt="avatar"
                width='100'
                height='100'
                />
            <div>
                <span style={{display: 'flex'}}>username:<h3> {item?.login}</h3> </span>
                <Link href={item?.html_url} target="_blank">GITHUB PROFILE</Link>
            </div>
        </div>
    )
}

export default Item