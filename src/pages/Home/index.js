import React from "react";
import { Container, SearchContainer, Input, SearchButton } from "./styles";
import Header from "../../components/Header";
import {Feather } from '@expo/vector-icons'; 

function Home(){
    return(

        <Container>
            <Header title="React Filmes " />
                <SearchContainer>
                    <Input 
                        placeholder="Homem Aranha"
                        placeholderTextColor="#ddd"
                    />
                    <SearchButton>
                        <Feather name="search" size={30} color="#fff" />
                    </SearchButton>
                </SearchContainer>
        </Container>
    )
}

export default Home;