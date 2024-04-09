// <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
// import * as API from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
// console.log("API:", API)
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import BookingPage from './BookingPage';
import {useReducer, useEffect} from 'react'; 
import {fetchAPI} from './mockAPI';
import ConfirmationPage from './ConfirmationPage';

localStorage.setItem('abc', 123)
localStorage.setItem('xyz', JSON.stringify({a:1, b:2}))

console.log( localStorage.getItem('abc') )
console.log( JSON.parse(localStorage.getItem('xyz')) )


function availableTimesReducer(state, action) {
    // console.log("action:", action)
    switch (action.type) {
        case 'initialize':
            state = {
                slots: action.apiTimes,
                dateDisplayed: 0
            }
            break
        case 'update':
            console.log('new date:',action.newDate)
             state.dateDisplayed = action.newDate
             break
        case 'book':
            const day = state.slots[state.dateDisplayed]
            const time = day[action.timeSelected]
            console.log(`day:`, day)
            console.log(`time:`, time)
            state.slots[state.dateDisplayed][action.timeSelected].booked = true;
            console.log('date-displayed-updated:',state.slots[state.dateDisplayed],action.timeSelected)
            break
        default:
            break
    }
    // console.log("state:", state)
    localStorage.setItem('bookings',JSON.stringify(state));
    return {...state}
}

// let arr = [1, 2, 3]
// arr.prop = 'hi'
// console.log(arr)
// console.log([...arr])


const today = new Date('2023-08-29')

function Main(){

    const [availableTimes, dispatch] = useReducer(availableTimesReducer, {slots: [], dateDisplayed: 0})
    /*
        dispatch({
            type: 2,
            newDate: '...'
        })  ⬅ this object becomes the action in your reducer function
                - your function automatically gets the state passed to it
                - return the updated state from your reducer function

                        entire array        index of day
                            ⬇                   ⬇
        const today = availableTimes.slots[availableTimes.dateDisplayed]
        today.map(...)
    */

    const pad0 = n => n < 10 ? '0'+n : n

    function checkLocalStorage() {
        // check if state already exists in local storage
        // if so, dispatch initialize with the state and return
        let json = localStorage.getItem('bookings')
        if(json){
            dispatch({
                type: 'initialize',
                apiTimes: JSON.parse(json).slots
            })
            return
        }
        // ⬇ only do this if there is nothing in localStorage
        initializeTimes()
    }

    async function initializeTimes(){
        const allTimes = {slots: [], dateDisplayed: 0}
        for (let i =0 ; i < 21 ;i++){
            let date = new Date(today.getTime() + (i*24*60*60*1000))
            // console.log("DATE:", date)
            let dateStr = `${date.getFullYear()}-${pad0(date.getMonth()+1)}-${pad0(date.getDate())}`
            // console.log(dateStr)
            const day = []
            const data = await fetchAPI(dateStr)
            for (let i = 0; i< 23; i++){
                const time = `${pad0(i)}:00`
                day.push({
                    time,
                    booked: !data.includes(time)
                })
            }
            allTimes.slots.push(day)

        }
        
        // console.log("initializeTimes/allTimes:", allTimes)
        dispatch({type: 'initialize', apiTimes : allTimes.slots} )
    }

    useEffect(()=>{
        checkLocalStorage()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/confirmation-page" element={<ConfirmationPage/> }/>
            </Routes>
        </main>
    )
}
export default Main;