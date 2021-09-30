import { Body, Button, Circle, Spacer, Text, Number } from './StyledComnponents'

function App({onClick, counter, text}) {
  return (
    <Body>
      <Circle widthValue={'70px'} heightValue={'70px'}><Number fontValue={'26px'}>{counter}</Number></Circle>
      <Spacer />
      <Text>{text}</Text>
      <Spacer />
      <Button onClick={onClick}>Wstecz</Button>
    </Body>
  );
}

export default App;
