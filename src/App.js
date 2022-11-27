import{useSelector , useDispatch} from 'react-redux'

const App = () => {
  //4 access data from store reducer with useSelector
  const data = useSelector(state=>state.counter)
  //5 change data in reducer with dispatch
  const dispatchCounter = useDispatch();
  return (
    <div>
      <h3>Counter:</h3>
      <h2>{data}</h2>
      <button onClick={()=>dispatchCounter({type:'INCERMENT'})}>increace</button>
      <button onClick={()=>dispatchCounter({type:'DECERMENT'})}>Decreace</button>
      <button onClick={()=>dispatchCounter({type:'RESET'})}>RESET</button>
    </div>
  )
}

export default App
