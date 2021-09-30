import { Body, Circle, Picture } from './StyledComnponents'

function App({user}) {
  return (
    <Body>
      <Circle widthValue={'100px'} heightValue={'100px'}>
        {user && <Picture src={user.picture.large}/>}
      </Circle>
    </Body>
  );
}

export default App;
