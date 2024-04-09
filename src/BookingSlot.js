import './App.css';
function BookingSlot({slot}){
    return (
        <> 
            <p className = 'time_slot' style={{backgroundColor: slot.booked ?  '#EE9972' : '#edefee' }}>{slot.time}</p>
        </>
    )
}

export default BookingSlot;