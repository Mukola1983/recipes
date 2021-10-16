import React, { useCallback } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { searcRecipe } from './API/recipes'
import { addCashActive, getCashActive } from './store/cashReduser'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cashReducer.cash)
  // const title = useSelector((state) => state.title)
  const arrayOfTitle = useSelector((state) => state.titleReducer.arrayOfTitle)

  const addCash = () => {
    dispatch(addCashActive(Number(prompt())))
  }
  const getcash = () => {
    dispatch(getCashActive(Number(prompt())))
  }

  const changeTitle = () => {
    dispatch({ type: 'CHANGE_TITLE', payload: prompt() })
  }

  const addTitle = () => {
    dispatch({ type: 'ADD_TITLE', payload: prompt() })
  }

  const startSearch = useCallback(() => {
    searcRecipe('tomato').then((data) => {
      console.log(data.to)
      dispatch({ type: 'ADD_TITLE', payload: data.hits })
    })
  }, [])

  return (
    <div>
      {arrayOfTitle.length ? (
        <h2>{arrayOfTitle[0].recipe.label}</h2>
      ) : (
        <h2>empty array</h2>
      )}
      <h1>{cash}</h1>
      <button onClick={() => addCash()}>add cash</button>
      <button onClick={() => getcash()}>get cash</button>
      {/* <button onClick={() => changeTitle()}>changeTitle</button> */}
      <button onClick={() => startSearch()}>addTitle</button>
      {arrayOfTitle.map((title) => (
        <div key={title.recipe.image}>
          <img alt="img" src={title.recipe.image} />
        </div>
      ))}
      <Button variant="danger">click</Button>
    </div>
  )
}

export default App
