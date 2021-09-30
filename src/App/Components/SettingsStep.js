import { Body, Button, Circle, Input, Number, Picture, Spacer, Text, Wrapper } from './StyledComnponents'

function App({onClick, user, counter, setCounter, inputValue, setInputValue}) {

  const handleClick = event => {
    event.target.value === '+' ? setCounter(counter += 1) : setCounter(counter -= 1)
  }

  const onInputChange = event => {
    setInputValue(event.target.value)
  }

  const {picture, name} = user
  return (
    <Body>
      <Circle widthValue={'100px'} heightValue={'100px'}>
        {user && <Picture src={picture.large}/>}
      </Circle>
      <Spacer />
      <Text>{`${name.first} ${name.last}`}</Text>
      <Spacer />
      <Wrapper>
        <Button value='-' onClick={event => handleClick(event)}>-</Button>
        <Number fontValue={'16px'}>{counter}</Number>
        <Button value='+' onClick={event => handleClick(event)}>+</Button>
      </Wrapper>
      <Spacer />
      <Input placeholder='Tutaj wpisz tekst...' onChange={event => onInputChange(event)} value={inputValue} />
      <Spacer />
      <Button onClick={() => onClick()}>Dalej</Button>
    </Body>
  );
}

export default App;
