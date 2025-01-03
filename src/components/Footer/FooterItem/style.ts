import styled from "styled-components";

const StyleItem = styled.section`
    padding: 16px 0;
`

const StyleItemsHeader = styled.h4 `
    color:#6E7491;
    font-size: 20px;
    font-weight:bold;
    margin-bottom:15px;
`
const StyleItemsList = styled.ul `
    list-style: none;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: left;
`
const StyleListItem = styled.li`
    padding: 4px 0;
    color: #7C8DB0;
    text-align: left;
    cursor:pointer;
    font-size:18px;
`;
const StyleSocialMedia = styled.div`
    width:100%;
    border-top: 1px solid #CBD4E6;
    padding: 12px 120px;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const StyleSocialMediaNavigation = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:10%;
`;

const StyleNavigationList = styled.ul`
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:8px;
    list-style: none;
`;


const StyleMediaLink = styled.a`
    cursor: pointer;
    height: 24px;
    width: 24px;
    display: inline-block;
    background-color: transparent;
    text-decoration: none;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }

    &:hover img {
        filter: grayscale(0%);
    }
`;

const StyleMediaText = styled.p`
    color: #7C8DB0;
    font-size: 18px;
`

export {
    StyleItem,
    StyleItemsHeader,
    StyleItemsList,
    StyleListItem,
    StyleSocialMedia,
    StyleSocialMediaNavigation,
    StyleMediaLink,
    StyleNavigationList,
    StyleMediaText
}