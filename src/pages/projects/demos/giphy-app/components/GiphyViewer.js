import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Row, Button, Dropdown, DropdownItem, DropdownButton } from 'react-bootstrap'

const GIPHY_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'tmuYdKXXyMgEhk7eOXvXjHkdAWIjp2Y7';

const GiphyViewer = () => {

    const [gifs, setGifs] = useState([]);
    const [term, setTerm] = useState("");
    const [limit, setLimit] = useState(15)

    useEffect(() => {

        axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
            .then((response) => {
                console.log(response.data.data)

                setGifs(response.data.data);
            })
            .catch((error) => {
                console.log(404)
            })

    }, [])

    const handleChange = (e) => {
        setTerm(e.target.value)
    };

    const handleClick = () => {
        searchGif();
    };

    
    const handleKeyUp = (e) => {
        if(e.key === 'Enter'){
        searchGif();
        }
    };

    const searchGif = () => {
        if(!term){
            alert("Please enter a search query")
            return;
        }
        axios.get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${term}&limit=${limit}`)
        .then((response) => {
            console.log(response.data.data)

            setGifs(response.data.data);
        })
        .catch((error) => {
            console.log(404)
        })

    }

    const handleTrendingClick = () =>{
        getTrending()
        setTerm("")
    }

    const getTrending = () => {
        axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
        .then((response) => {
            console.log(response.data.data)

            setGifs(response.data.data);
        })
        .catch((error) => {
            console.log(404)
        })
    }

    const handleRandomClick = () =>{
        getRandom()
        setTerm("")
    }

    const getRandom = () => {
        axios.get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
        .then((response) => {
            console.log(response.data.data)

            setGifs([response.data.data]);
        })
        .catch((error) => {
            console.log(404)
        })
    }

    const handleSelect = (amount) => {
        setLimit(amount);
    }

    const gifComponents = gifs.map((g) => {
        return (
            <GIFCard key={g.id} title={g.title} url={g.url} image={g.images.fixed_width.url}/>
        )
    });

    return(
        <>
        <div className="search">
            <input type="text" value={term} onChange={handleChange} onKeyUp={handleKeyUp}/>
            <Button variant="primary" onClick={handleClick}>Search</Button>
            <Button variant="primary" onClick={handleTrendingClick}>Trending</Button>
            <Button variant="primary" onClick={handleRandomClick}>Random</Button>
            <DropdownButton onClick={handleSelect}>
                <DropdownItem>5</DropdownItem>
                <DropdownItem>10</DropdownItem>
                <DropdownItem>15</DropdownItem>
                <DropdownItem>20</DropdownItem>
                <DropdownItem>25</DropdownItem>
            </DropdownButton>
        </div>
        <Row className="g-4" md={3} xs={1}>
            {gifComponents}
        </Row>
        </>
    )
}

const GIFCard = (props) => {
    return(
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title target="_blank">
                    <a href={props.url}>{props.title}</a>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default GiphyViewer;