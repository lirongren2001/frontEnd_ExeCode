/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 16:14:16
 * @LastEditTime: 2025-04-27 11:01:00
 * @LastEditors: renlirong
 */
// 图片墙高性能加载方案，结合虚拟滚动 + 渐进加载 + 缓存优化，实现千级图片流畅渲染
import {useState,useEffect,useCallback,useRef} from 'react'
import {FixedSizeGrid} from 'react-window'

const ImgWall = (url)=>{
    const [img,setImg] = useState([])
    const [loading,setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const controllerRef = useRef(new AbortController())

    useEffect = (()=>{
        getImg(0)
    },[])

    const getImg = useCallback(async()=>{
        setLoading(true)
        // fetch
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(page),
            signal:controllerRef.current.signal
        })
        if (!response.ok) throw new Error('Response Error!')
        const data = await response.json()
        setImg(data)
        setLoading(false)
        return ()=>{
            controllerRef.current.abort()
        }
    },[page])

    const handleScroll = useCallback(({ScrollHeight,ScrollTop,ClientHeight})=>{
        const threshold = 200
        if(ScrollHeight-ScrollTop-ClientHeight<threshold) setPage((prev)=>prev+1)
    },[])

    const debounce = (fn)=>{
        let timer = 0
        return setTimeout(()=>{
            if (timer) clearTimeout(timer)
            fn()
        },100)
    }

    return (
        <FixedSizeGrid
        width = {1000}
        height = {1000}
        itemData={img}
        onScroll = {debounce(handleScroll)}
        >
            {loading&&<h2>loading.....</h2>}
            <img src = {src}/>
        </FixedSizeGrid>
    )
}
