import { Body, Button, Circle, Input, Number, Picture, Text, Wrapper } from './StyledComnponents'

function App({user, counter, setCounter, inputValue, setInputValue}) {

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
      <Text>{`${name.first} ${name.last}`}</Text>
      <Wrapper>
        <Button value='-' onClick={event => handleClick(event)}>-</Button>
        <Number>{counter}</Number>
        <Button value='+' onClick={event => handleClick(event)}>+</Button>
      </Wrapper>
      <Input placeholder='Tutaj wpisz tekst...' onChange={event => onInputChange(event)} value={inputValue} />
      <Button>Dalej</Button>
    </Body>
  );
}

export default App;
