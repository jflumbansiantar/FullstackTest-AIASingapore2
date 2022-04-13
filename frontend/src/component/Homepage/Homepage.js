import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";
import { Button, Container, MainHeading } from './../../GlobalStyle';
// import Photo from "./../Photo/Photo";

function Body(){
    const [photos,setPhotos] = useState([]),
        [loading, setLoading] = useState(false),
        [page, setPage] = useState(1),
        [totalPage, SetTotalPage] = useState(0)

    useEffect(() => {
        const getPhotos = async (search) => {
            setLoading(true);
            try {
                const pho = await axios.get(
                    search === "" ? 'http://localhost:8000/all-photo' : `http://localhost:8000/search/${search}`
                );
                console.log(pho.data, "ALL Photo")
                setPhotos(pho.data)
            } catch (error) {
                console.log("ini error: ", error);
            }
        }
        getPhotos()
    })

    return(
        <Container>
            <MainHeading>
                <Button>photos</Button>
            </MainHeading>
        </Container>
    )
}

export default Body;