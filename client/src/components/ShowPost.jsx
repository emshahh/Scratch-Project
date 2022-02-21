import React, { useState, useEffect } from 'react';
import axios from "axios";


const ShowPost = (props) => {

    // const [comments, setComments] = useState([]);


    // useEffect(() => {
    //     getAllComment();
    // }, []);


    // const getAllComment = async () => {
    //     try {
    //         const response = await fetch("http://localhost:3000/api/comments");
    //         const jsonData = await response.json();
    //         setComments(jsonData);
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }
    const onDelete = e => {
        // const id = { id }
        axios.delete(`http://localhost:3000/api/deleteComment/${key}`)
        .then(result => console.log(result))
    }

    const onEdit = e => {
        
        axios.put(`http://localhost:3000/api/deleteComment/${key}`)
        .then(result => console.log(result.data))
    } 

    return (
        <div>
            <h3>Comments</h3>
            <table>
                <tbody>
                    {props.comments.map(comment =>
                        <tr key={comment.comment_id}>
                            <td>{comment.city} </td>
                            <td>{comment.country}</td>
                            <td>{comment.comment}</td>
                            <td>{comment.users}</td>
                            <button onClick={onEdit}>Edit</button>
                            <button onClick={onDelete}>Delete</button>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ShowPost;