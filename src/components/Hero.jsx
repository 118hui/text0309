import React from "react";
import tw from "twin.macro";
//import mockupImageSrc from "images/app-mockup.png";
//import appleIconImageSrc from "images/apple-icon.png";
//import googlePlayIconImageSrc from "images/google-play-icon.png";

const Container = tw.div`bg-gray-900 -mx-8`;
const Content = tw.div`container mx-auto px-8 lg:px-0 py-16 lg:py-24`;
const Row = tw.div`flex flex-col lg:flex-row justify-center items-center text-center lg:text-left`;

const ColumnContainer = tw.div`max-w-2xl`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h2`text-gray-100 lg:text-left text-3xl lg:text-4xl font-bold leading-tight`;
const Subheading = tw.p`text-yellow-500 mb-4 tracking-wider text-lg`;

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center`;
const Link = tw.a`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`;
const Icon = tw.img`inline-block h-8 mr-3`;

const ImageContainer = tw(ColumnContainer)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw.svg`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`;
const DecoratorBlob2 = tw.svg`absolute top-0 right-0 w-80 h-80 transform translate-x-20 -translate-y-64 text-gray-800 opacity-50`;

export default ({
    subheading = "Download App",
    text = "Developers all over the world are happily using Treact.",
    link1Text = "App Store",
    link1Url = "http://apple.com",
    link1IconSrc = appleIconImageSrc,
    link2Text = "Google Play",
    link2Url = "http://play.google.com",
    link2IconSrc = googlePlayIconImageSrc,
    pushDownFooter = false,
    imageSrc = mockupImageSrc,
}) => {
    return (
        <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
            <Content>
                <Row>
                    <TextContainer>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Text>{text}</Text>
                        <LinksContainer>
                            <Link href={link1Url}>
                                <Icon src={link1IconSrc} alt="" />
                                <span>{link1Text}</span>
                            </Link>
                            <Link href={link2Url}>
                                <Icon src={link2IconSrc} alt="" />
                                <span>{link2Text}</span>
                            </Link>
                        </LinksContainer>
                    </TextContainer>
                    <ImageContainer>
                        <img src={imageSrc} alt="" tw="w-64" />
                    </ImageContainer>
                </Row>
                <DecoratorBlobContainer>
                    <DecoratorBlob1 />
                    <DecoratorBlob2 />
                </DecoratorBlobContainer>
            </Content>
        </Container>
    );
};
