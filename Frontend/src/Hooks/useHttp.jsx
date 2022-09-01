import axios from "axios";
import { useState } from "react";

const url = 'http://localhost:5000/';

export function useGetArticles() {
    const [state,setState] = useState({status:200,loading:false,msg:'',data:[]});
    async function submit(path) {
        try {
            setState({...state,loading:true});
            const res = await axios.get(url+path);
            const {status,body,msg} = res.data;
            setState({...state,status:status,loading:status !== 200,msg:msg,data:status===200?body:[]});
        } catch(err) {
            setState({...state,status:500,loading:true,msg:err.message||'Something went wrong! Code: 500',data:[]});
        }
    }
    return [state,submit];
}
export function useGetArticle() {
    const [state,setState] = useState({status:200,loading:false,msg:'',data:{}});
    async function submit(path) {
        try {
            setState({...state,loading:true});
            const res = await axios.get(url+path);
            const {status,body,msg} = res.data;
            setState({...state,status:status,loading:status !== 200,msg:msg,data:status===200?body:{}});
        } catch(err) {
            setState({...state,status:500,loading:true,msg:err.message||'Something went wrong! Code: 500',data:{}});
        }
    }
    return [state,submit];
}
export function usePostArticle() {
    const [conf,setConf] = useState({status:201,open:false,msg:'',loading:false});
    async function submit(reqData,path,navigate) {
        try {
            setConf({...conf,loading:true});
            const formData = new FormData();
            formData.append('title', reqData.title);
            formData.append('author', reqData.author);
            formData.append('img', reqData.img);
            formData.append('body', reqData.body);
            const res = await axios.post(url+path,formData);
            setConf({...conf,open:true,loading:false,msg:res.data.msg,status:res.data.status});
            setTimeout(() => {
                setConf({...conf,open:false});
                navigate('/');
            }, 5000);
        } catch(err) {
            setConf({...conf,status:500,loading:false,open:true,msg:err.message||'Something went wrong! Code: 500'});
            setTimeout(() => {
                setConf({...conf,open:false});
            }, 5000);
        }
    }
    return [conf,submit,setConf];
}