import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: sans-serif;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 500px;
    max-width: 95%;
    max-height: 98%;
    padding: 50px 20px;
    background-color: #f9f9f9;
`

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({widthValue}) => widthValue};
    height: ${({heightValue}) => heightValue};
    border: 3px solid #4338f2;
    border-radius: 50%;
    overflow: hidden;
`

export const Picture = styled.img`
    height: 100%;
    width: auto;
`

export const Text = styled.p`
    font-size: 22px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: #038a32;
    color: #FFFFFF;
    font-size: 12px;
`

export const Number = styled.p`
    font-size: ${({fontValue}) => fontValue}
`

export const Input = styled.input`
    padding: 0 10px;
    border: 1px solid #038a32;
    border-radius: 8px;
    line-height: 3;
    &:focus {
        &::placeholder {
            color: transparent
        }
    }
`

export const Spacer = styled.span`
    margin: 20px 0
`