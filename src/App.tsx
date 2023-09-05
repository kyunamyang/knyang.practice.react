import '@/App.css';
import { Sample } from 'idioms';
import { Person, WorkItem } from 'domains';
import Progress from './idioms/Progress';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Sample></Sample>

      <Person></Person>

      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <button className='btn btn-secondary'>Secondary</button>

      <WorkItem></WorkItem>

      <Progress></Progress>
      <br></br>
      <Progress classNames={['progress-primary', 'w-72']}></Progress>
    </>
  );
}

export default App;
