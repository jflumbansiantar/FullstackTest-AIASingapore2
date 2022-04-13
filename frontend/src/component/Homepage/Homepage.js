import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";
import { Button, Container, MainHeading, Section, Heading, TextWrapper, Row, Column } from './../../GlobalStyle';
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
                    "http://localhost:8000/all-photo"
                    // search === "" ? 'http://localhost:8000/all-photo' : `http://localhost:8000/search/${search}`
                );
                // let temp = pho.data
                // console.log(temp.data.photos, "ALL Photo")
                setPhotos(pho.data.data.photos.photo)
            } catch (error) {
                console.log("ini error: ", error);
            }
        }
        getPhotos()
    })

    console.log(photos)

    return(
        <>
            <Container>
                <Section>
                {photos.map(el => (
                    <Row padding="10px">
                        <TextWrapper color="white" font-size="12px">{el.title}</TextWrapper>
                    </Row>
                ))}
                </Section>
            </Container>
        </>
    )
}

export default Body;