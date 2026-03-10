import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ReactNav from './Components/ReactNavbar/ReactNav'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'
import StudentMarks from './Components/StudentMarks/StudentMarks'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingFetch = fetch("data.json").then(res=>res.json())
const marksPromise = axios.get("marksData.json")

function App() {

  return (
    <>
    <Navbar></Navbar>
    <ReactNav></ReactNav>

    <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
    <PricingOptions pricingFetch={pricingFetch}></PricingOptions>
    </Suspense>

    <ResultChart></ResultChart>
    <StudentMarks></StudentMarks>

    <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
<MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>
    </>
  )
}

export default App
