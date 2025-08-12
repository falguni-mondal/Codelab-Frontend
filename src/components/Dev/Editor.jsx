import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../utils/functions/keys';

const Editor = () => {

    const [snippet, setSnippet] = useState(null);

    const {id} = useParams();

    const snippetFinder = async () => {
        const res = await axios.post(`${baseUrl}/api/snippet/find`, id, {withCredentials:true})
    }

    useEffect(() => {

    })

    return (
        <Editor
            height="90vh"
            theme="vs-dark"
            language={language}
            value={value}
            onChange={(newValue) => onChange(newValue)}
        />
    )
}

export default Editor