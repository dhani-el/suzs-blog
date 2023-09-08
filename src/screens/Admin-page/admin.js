import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import { useDispatch } from "react-redux";
import { postBlog } from "../../actions/adminActions";
import React from 'react';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import {CKEditor} from '@ckeditor/ckeditor5-react';

const Admin = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [genre, setGenre] = useState();
    const [readTime, setReadtime] = useState();
    // const [date, setDate] = useState();
    const [IsPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [yearfns, setYearfns] = useState(2023);
    const [monthfns, setMonthfns] = useState(0);
    const [dateNofns, setDatenofns] = useState(1);

    const dispatch = useDispatch();

    // data involving setting date fns

    const years = [
        2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038
    ]
    const months = [
        'january',
        'febuary',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
        ''
    ]
    const dateNos = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]

    const handleSubmit = (e) => {
        const date = new Date().toLocaleString('en-us');
        e.preventDefault();
        setIsPending(true);
        dispatch(postBlog({
            title: `${title}`,
            body: `${body}`,
            genre: `${genre}`,
            readTime: `${readTime}`,
            date: `${date}`,
            image: image,
        })).then(() => {
            setIsPending(false);
            navigate('/blogs/0');
        })
    }

    return (
        <div className="admin-container">
            <div className="h2">Hi Zee, what are we writing?</div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    blog title
                </label>
                <input type="text" name="" id=""
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">genre</label>
                <input type="text"
                    required
                    onChange={(e) => setGenre(e.target.value)}
                />
                <label htmlFor="">read time</label>
                <input type="text"
                    required
                    onChange={(e) => setReadtime(e.target.value)}
                />
                <label htmlFor="">Upload Image</label>
                <input type="file" name="image" id="image"
                    required
                    onChange={(e) => setImage(e.target.files[0])}
                />
                {/* <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea> */}
                <div>
                    <div className="App">
                    <label htmlFor="">blog body</label>
                        <CKEditor
                            editor={Editor}
                            data="<p>Hello! from ck5</p>"
                            onReady={editor => {
                                // you can store editor and use it when it is needed
                                console.log('editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setBody(data)
                                console.log( data, typeof data);
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus', editor);
                            }}
                        />
                    </div>
                </div>
                {IsPending ? (<button disabled>adding blog</button>) : (<button onClick={handleSubmit}>add blog</button>)}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{genre}</p>
            <p>{readTime}</p>
            {/* <p>{date}</p> */}
            <p>{yearfns}</p>
            <p>{monthfns}</p>
            <p>{dateNofns}</p>
        </div>
    );
}

export default Admin;