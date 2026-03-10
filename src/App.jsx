import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ReactNav from './Components/ReactNavbar/ReactNav'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'
import StudentMarks from './Components/StudentMarks/StudentMarks'

const pricingFetch = fetch("data.json").then(res=>res.json())

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
    </>
  )
}

export default App
