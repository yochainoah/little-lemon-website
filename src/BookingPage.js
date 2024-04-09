import BookingForm from "./BookingForm";
import './App.css';
import BookingSlot from "./BookingSlot";


function BookingPage({availableTimes, dispatch}){
    console.log("availableTimes:", availableTimes)
    return (
        <>
            
            <section className='booking-page'>
                <article className='form-section'>
                    <h1 id="booking-header">Book now!</h1>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </article>
                <div className="time_table_section">
                    <h2>Available times</h2>
                    <article className="time_table">
                    {
                        availableTimes.slots[availableTimes.dateDisplayed]?.map((slot)=>{
                            return (
                                <BookingSlot key={slot.time} slot={slot} />
                            )
                        })
                    }
                    </article>
                </div>
                    
            </section>
        </>
        
    )
}

export default BookingPage;