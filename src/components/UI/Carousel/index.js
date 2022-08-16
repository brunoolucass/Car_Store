import React, {Component} from "react";
import { CarList } from "../../../utils/CarList";
import { YearKm, Card, SectionContainer, Section, Title} from "./styled";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




export default class CarouselResponsive extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      
      };
    
    const CardContainer= styled(Link) `
      padding: 2%;
      border-radius: 5%;
      box-sizing: border-box;
` 
  
    return (
      <Section>
        <SectionContainer>
            <Slider {...settings}>
                {CarList.map(item => {
                  console.log(item.model)
                    return (
                        <CardContainer key={item} to={`/${item.model} `} onClick="scroll(0, 100)"> 
                            <Card>
                            <img key={item} src={item.image1} alt={"img-car"} width={"100%"} height={"100%"}/>
                                <Title translate="no"> {item.model} </Title> 
                                <p> {item.transmission} </p>
                                <h1> R$ {item.price}</h1>
                                <YearKm>
                                    <p> {item.year} </p>
                                    <p> {item.Km} </p>
                                </YearKm>
                            </Card>
                        </CardContainer> 
                        )
                    })}
        
            </Slider>
          </SectionContainer>
      </Section>
    );
                }
            }