import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './homepage.scss';

function Homepage() {

    const [userName, setUserName] = useState("");
    const history = useHistory();


    function handleSubmit(event) {
        event.preventDefault();
        history.push(`/profile/${userName}`)
    }

    console.log(userName);

    return (
        <>
            <h1>Welcome to the Portfolio generator</h1>
            <h3>enter your github user name</h3>
            <form className={"form-gh"} onSubmit={handleSubmit}>
                <input type="text"
                    placeholder={"type username"}
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                />
                <button>Search</button>
            </form>
        </>
    );
}

export default Homepage;