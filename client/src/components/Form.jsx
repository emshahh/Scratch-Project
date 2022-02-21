import React, { Fragment, useState } from 'react';

const Form = () => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [user_id, setPersonId] = useState(1);
    const [comment, setComment] = useState('');

    let lat;
    let lng;

    const onSubmitForm = async e => {
        e.preventDefault();
        lat = Math.floor(localStorage.getItem("lat"));
        lng = Math.floor(localStorage.getItem("lng"));
        console.log(lat, lng);
        try {
            const body = { comment, city, country, user_id, lat, lng };
            const response = await fetch("http://localhost:3000/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            console.log('test')
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmitForm}>
                <div>
                    <div>{user_id}</div>
                    <div>{lat}</div>
                    <div>{lng}</div>
                    <div>
                        <input type="text" placeholder="City" value = {city} onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Country" value = {country} onChange={e => setCountry(e.target.value)}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Comment" value = {comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                </div>
                <button >Submit</button>
            </form>
        </Fragment>

    )
}

export { Form }