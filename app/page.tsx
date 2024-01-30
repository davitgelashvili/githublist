"use client"

import style from "./page.module.css";
import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import { useEffect, useState } from "react";
import getUsers from "@/http/users";

const Home = () => {
    const [data, setData] = useState<any>([])
    const [searchText, setSearchText] = useState('')

    useEffect(()=>{
        if(searchText.trim() === ''){
            getUsers('/search/users?q=followers:>=1000')
            .then(_data => setData(_data))
        }else {
            getUsers(`/search/users?q=${searchText}`)
            .then(_data => setData(_data))
        }
    }, [searchText])

    return (
        <div className={style.container}>
            <Form setSearchText={setSearchText} searchText={searchText}/>
            <List data={data}/>
        </div>
    )
}

export default Home