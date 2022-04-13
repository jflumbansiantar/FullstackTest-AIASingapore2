import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Section, TextWrapper, Row, SocialIcon, ContainerProduct } from './../../GlobalStyle';
import {FeatureColumn, SearchBox} from './HomepageStyles';
import Search from '@material-ui/icons//Search';
import Swal from "sweetalert2";

function Body(){
    const [photos,setPhotos] = useState([]),
        [loading, setLoading] = useState(false),
        // [page, setPage] = useState(1),
        // [totalPage, SetTotalPage] = useState(0),
        [input, setInput] = useState(""), 
        initial = { y: 40, opacity: 0 }, animate = { y: 0, opacity: 1 };

    const searchString = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        };

    const searchFunc = (e) => {
        e.preventDefault();
        if (input) {
            const getPhotos = async (input) => {
                setLoading(true);
                // console.log(input)
                try {
                    const pho = await axios.get({
                       url: `http://localhost:8000/search`,
                       headers: {
                        tag: input,
                      }
                    });
                    setPhotos(pho.data.result)
                } catch (error) {
                    console.log("ini error: ", error);
                }
            }
            getPhotos(input)
        } else {
            Swal.fire({
            title: "Type something in searchbar!",
            icon: "error",
            });
        }
    }

    useEffect(() => {
        const getPhotos = async (search) => {
            setLoading(true);
            try {
                const pho = await axios.get(
                    "http://localhost:8000/all-photo"
                );

                setPhotos(pho.data.result)
            } catch (error) {
                console.log("ini error: ", error);
            }
        }
        getPhotos()
    })

    return(
        <>
            <Container>
                <Section inverse padding="10px" mindWIdth="700px">
                    <Row>
                       <Search />
                        <form onSubmit={searchFunc}>
                            <SearchBox
                            type="text"
                            placeholder="Search Porduct..."
                            name="search"
                            onChange={searchString}
                            value={input}
                            />
                        </form>
                    </Row>
                </Section>
                <Section padding="20px" mindWIdth="700px">
                    <ContainerProduct>
                    {photos.map((el, index) => (
                        <Row padding="10px" justify="center" width="300px">
                            <FeatureColumn initial={initial} animate={animate} transition={{ duration: 0.5 + index * 0.1 }} key={index} >
                                <SocialIcon src={`http://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`} alt="gambar"/>
                                <TextWrapper color="black" font-size="12px">{el.title ? el.title : "No Title" }</TextWrapper>
                            </FeatureColumn>
                        </Row>
                    ))}
                    </ContainerProduct>
                </Section>
            </Container>
        </>
    )
}

export default Body;