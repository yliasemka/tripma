import styled from "styled-components";

const StyleCommentSection = styled.section`
    width:100%;
    margin-top:36px;
    padding: 64px 0;
`;

const StyleHeader = styled.h3`
    font-size:24px;
    font-weight: 600;
    color: #6E7491;
    text-align:center;
    margin-bottom:50px;
`;

const StyleCommentsWrapper = styled.div`
    display:flex;
    position:relative;
    width:100%;
    justify-content:space-between;
    flex-wrap: wrap;

`;

export {
    StyleCommentSection,
    StyleCommentsWrapper, 
    StyleHeader
}