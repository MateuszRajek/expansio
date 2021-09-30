import { useEffect, useState } from 'react';
import { Container } from '../App/Components/StyledComnponents'
import SettingsStep from '../App/Components/SettingsStep'
import ScoreStep from '../App/Components/ScoreStep'

const App = () => {
  const [stepNumber, setStepNumber] = useState(1)
  const [randomUser, setRandomUser] = useState()
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const getRandomUser = () => {
    fetch('https://randomuser.me/api/', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data =>setRandomUser(data.results[0]))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getRandomUser()
  }, [])

  const stepChange = () => {
    stepNumber === 1 ? setStepNumber(2) : setStepNumber(1)
  }

  return (
      <Container>
        {randomUser && stepNumber === 1 && 
        <SettingsStep 
          onClick={stepChange}
          user={randomUser} 
          counter={counter}
          setCounter={setCounter}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />}
        {stepNumber === 2 && 
        <ScoreStep 
          onClick={stepChange}
          counter={counter}
          text={inputValue}
        />}
      </Container>
  );
}

export default App;
