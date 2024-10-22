import react,{ useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [salary, setSalary] = useState('');
  const [gos, setGos] = useState('');
  const [bonus, setBonus] = useState('')
  const [fans, setFans] = useState(null);


  const onSubmitHandler = async() => { 
    const response = await axios.post(`http://localhost:4000/post`,{
      salary : salary,
      bonus:bonus,
      fans :fans,
    });

    setSalary(response.data.data);
    setFans(response.data.data);
  }
  return (
    <>
      <div className="salary">
        <form onSubmit={onSubmitHandler}>
        <label className='salary-label'>Enter your Gross Salary 
          <input className ='salary-input' type ="number"
          value={salary}
          onChange={(e) => e.target.salary}
          required
          />
        </label>

        /* Add extra  */
        <label className='salary-label'>Enter your Gross Salary 
          <input className ='salary-input' type ="number"
          value={gos}
          onChange={(e) => e.target.gos}
          required
          />
        </label>


        <label className='salary-label'>Enter your Gross Salary 
          <input className ='salary-input' type ="number"
          value={bonus}
          onChange={(e) => e.target.bonus}
          required
          />
        </label>

        <button > Click</button>
        </form>
      </div>
      {
        fans  === null ? <></> :
         <>
          <h1>Your Estimated Salary is : {fans}</h1>
        </>
      }
    </>

  )
}

export default App