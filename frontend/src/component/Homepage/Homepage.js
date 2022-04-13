import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";
import { Button, Container, MainHeading, Section, Heading, TextWrapper, Column, Row, SocialIcon, ContainerProduct } from './../../GlobalStyle';
import {FeatureColumn} from './HomepageStyles'
import SearchIcon from '@material-ui/icons//Search';
import Search from '@material-ui/icons//Search';

// import Photo from "./../Photo/Photo";

function Body(){
    const [photos,setPhotos] = useState([]),
        [loading, setLoading] = useState(false),
        [page, setPage] = useState(1),
        [totalPage, SetTotalPage] = useState(0),
        [modal, setModal] = useState({
            sideDrawer: false,
          }),
        [isShown, setIsShown] = useState(false),
        [input, setInput] = useState("");

    const searchString = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        };
        const history = useHistory();

    const searchFunc = (e) => {
        e.preventDefault();
        if (input) {
            history.push(`/search/${input}`);
            setInput("");
        } else {
            Swal.fire({
            title: "Type something in searchbar!",
            icon: "error",
            });
        }
    }
        
    
    const initial = {
        y: 40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };

    useEffect(() => {
        const getPhotos = async (search) => {
            setLoading(true);
            try {
                const pho = await axios.get(
                    "http://localhost:8000/all-photo"
                    // search === "" ? 'http://localhost:8000/all-photo' : `http://localhost:8000/search/${search}`
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
                <Section inverse>
                    <Row>
                        <Row>
                            <img src={Search} alt="search"></img>
                        </Row>
                        <Row>
                            <form onSubmit={searchFunc}>
                                <input
                                type="text"
                                placeholder="Search Porduct..."
                                name="search"
                                onChange={searchString}
                                value={input}
                                />
                            </form>
                        </Row>
                        
                    </Row>
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