import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    padding: 50px 20px;
    max-width: 95%;
    background-color: #f9f9f9;
`

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.widthValue};
    height: ${(props) => props.heightValue};
    border: 2px solid #4338f2;
    border-radius: 50%;
`

export const Picture = styled.img`
    height: 100%;
    width: auto;
    border-radius: 50%;
`