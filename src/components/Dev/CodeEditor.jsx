import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../utils/functions/keys';

const CodeEditor = () => {

    const [snippet, setSnippet] = useState(null);

    const {id} = useParams();

    const snippetFinder = async () => {
        const res = await axios.post(`${baseUrl}/api/snippet/find`, {id}, {withCredentials:true});
        if(res.data){
            setSnippet(res.data);
        }
    }

    const changesHandler = (value) => {
        console.log(value);
        
    }

    useEffect(() => {
        snippetFinder();
    }, [])

    return (
        snippet &&
        <Editor
            height="90vh"
            theme="vs-dark"
            language={snippet.language}
            value={snippet.content}
            onChange={(newValue) => changesHandler(newValue)}
        />
    )
}

export default CodeEditor