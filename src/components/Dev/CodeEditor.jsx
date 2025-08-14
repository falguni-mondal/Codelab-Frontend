import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../utils/functions/keys';

const CodeEditor = () => {

    const [snippet, setSnippet] = useState(null);

    const { id } = useParams();

    const snippetFinder = async () => {
        const res = await axios.post(`${baseUrl}/api/snippet/find`, { id }, { withCredentials: true });
        if (res?.data) {
            setSnippet(res?.data);
        }
    }

    let timer = null;

    const changeHandler = (value) => {
        
        clearTimeout(timer);
        timer = setTimeout(async () => {
            const res = await axios.patch(`${baseUrl}/api/snippet/code/update`, {id, code: value}, {withCredentials: true});
        }, 1500)

    }

    useEffect(() => {
        snippetFinder();
    }, [])

    return (
        snippet &&
        <div className="editor-page-wrapper w-full flex">
            <div className="leftnav w-[16%] pt-1 pl-10">
                <h2 className='text-[0.9rem] font-medium text-zinc-300'>Collaborators</h2>
                <div className="collaborators-list">

                </div>
            </div>
            <div className="editor-page w-[84%] pt-2">
                <Editor
                    height="88vh"
                    theme="hc-black"
                    language={snippet.language}
                    value={snippet.content}
                    onChange={(newValue) => changeHandler(newValue)}
                />
            </div>
        </div>
    )
}

export default CodeEditor