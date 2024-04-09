/*
    class="xyz"     className="xyz"
    for="abc"       htmlF
    
    style={{
        color: 'blue',
        padding: '2px'
    }}
style="""color: blue; padding: 2px    cba""=r
*/  
import './App.css';
import {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


function BookingForm({
    availableTimes = {slots:[[]]}, 
    dispatch
}){
    const [time, setTime] = useState(0);
    const [guestsNumber, setGuestsNumber] = useState(0);
    const [occasion, setOccasion] = useState('Choose occasion');

    const [timeError, setTimeError] = useState('');
    const [guestsError, setGuestsError] = useState('');
    const [occasionError, setOccasionError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTimeError('');
        setGuestsError('');
        setOccasionError('');
        console.log('Form submitted!!')
        console.log("time:", time)
        console.log('occasion',occasion);
        
        let isValid = true;
        if (time === 0) {
            setTimeError('Please choose a time');
            isValid = false;
        }
        if (guestsNumber <= 0) {
            setGuestsError('Number of guests must be at least 1');
            isValid = false;
        }
        if (occasion === "Choose occasion") {
            setOccasionError('Please choose an occasion');
            isValid = false;
        }
    
        if (!isValid) {
            return; 
        }
        //validate make sure the form has the correct data
        dispatch({
            type: 'book',
            timeSelected: time,

        })
        navigate('/confirmation-page')
    }

    function setTimeFromValue(e) {
        const timeSlots = availableTimes.slots[availableTimes.dateDisplayed]
        const index = timeSlots.findIndex(slot => slot.time === e.target.value)
        setTime(index)
    } 

    return (
        <>
            
            
            <form className="reservation-form" onSubmit={handleSubmit}>{/* <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}> */}
                <div className='input-container'>
                    <label htmlFor="res-date">Choose date</label>
                    <select 
                    id="res-date" 
                    onChange={e=>dispatch({type:'update', newDate: e.target.value})} 
                    defaultValue={availableTimes.dateDisplayed}
                >
                    {availableTimes.slots?.map((day,index)=>{
                        return(<option value={index} key={`day-${index}`}>day {index+1}</option>)
                    })}
                    </select>
                </div>
                
                <div className = "input-container">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" defaultValue="" onChange={setTimeFromValue} style={{ border: timeError ? '2px solid red' : '' }}>
                        <option value="">Choose a time</option>
                        {availableTimes ? (availableTimes.slots[availableTimes.dateDisplayed]?.filter((slot) => !slot.booked).map((slot, i)=><option value={slot.time} key={slot.time}>{slot.time}</option>)) : null}
                    </select>
                    {timeError && <small style={{ color: 'red' }}>{timeError}</small>}
                </div>
                
                <div className = "input-container">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="0" min="0" max="10" id="guests" value={guestsNumber} onChange={e=>setGuestsNumber(e.target.value)} style={{ border: guestsError ? '2px solid red' : '' }}/>
                    {guestsError && <small style={{ color: 'red' }}>{guestsError}</small>}
                </div>
                
                <div className = "input-container">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} style={{ border: occasionError ? '2px solid red' : '' }}>
                        <option>Choose occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {occasionError && <small style={{ color: 'red' }}>{occasionError}</small>}
                </div>
                
                

                <button type="submit" id="reserve-btn">Make Your reservation</button>
            </form>
        </>
        
    )
}

export default BookingForm;