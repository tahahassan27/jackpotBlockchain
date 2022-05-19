import react from 'react';
import { useState } from 'react';

const CreateJackPot = (props) => {
    const [date, setDate] = useState();
    const [jackpot, setJackpot] = useState();
    const setDateAndTime = (event) => {
        event.preventDefault();
        setDate(event.target.value);
    }

    const showDate = (event) => {
        event.preventDefault();
        

    }
    return (<div>
        <h4>JACKPOT</h4>
        <form onSubmit={showDate}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" onChange={(event)=>{setJackpot(event.target.value)}} />
                <label>Enter Jack Pot End Date</label>
                <input type="date" className="form-control"  placeholder="Enter End Date" onChange={setDateAndTime} />
                <button >Create JackPot</button>
            </div>
            </form>
        {/* <input onChange={setDateAndTime} type="date"/>
        <button onClick={showDate}>Submit</button> */}
        </div>
        )}
export default CreateJackPot;