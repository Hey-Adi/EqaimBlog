import { useState } from "react";

export default function useInput(iniState) {
    const [state,setState] = useState(iniState);
    function change(e,which=false,img=false,any=false) {
        if(which) {
            setState({...state,[which]:img ? e.target.files[0] : any ? e : e.target.value});
        } else {
            setState(img ? e.target.files[0] : any ? e : e.target.value);
        }
        console.log(state);
    }
    return [state,change,setState];
}