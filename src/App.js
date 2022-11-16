import logo from './assets/logo.svg'
import person from './assets/person.svg'
import dollar from './assets/dollar.svg'
import { useState } from 'react'

function App() {
  //states
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [random, setRandom] = useState('')
  const [people, setPeople] = useState('')
  const [perperson, setPerperson] = useState(0)
  const [tipperperson, setTipperperson] = useState(0)
  const [newerror, setNewerror] = useState('')
  const [toperror, setToperror] = useState('')
  const [pannel, setPannel] = useState(0)

  //tip calculation
  const tipPerPerson = () => {
    const tips = tip || random / 100
    const tipDue = bill * tips
    const tipppp = tipDue / people
    let p = tipppp.toFixed(2)
    const amountDue = (tipDue + Number(bill)) / people
    let n = amountDue.toFixed(2)
    setTipperperson(p)
    setPerperson(n)
    return n
  }

  // active background
  const fiveperecent = () => {
    setTip('0.05')
    setPannel(1)
  }
  const tenperecent = () => {
    setTip('0.10')
    setPannel(2)
  }
  const fiftheenrecent = () => {
    setTip('0.15')
    setPannel(3)
  }
  const twentyfiveperecent = () => {
    setTip('0.25')
    setPannel(4)
  }
  const fiftyperecent = () => {
    setTip('0.50')
    setPannel(5)
  }

  const hello = () => {
    setPannel(6)
  }

  // authentication for calculations
  const calculate = () => {
    if (people === '' || people <= 0) {
      setNewerror("Number can't be less than 1")
      return setTimeout(setNewerror, 5000)
    } else if (bill === '' || bill <= 0) {
      setToperror("Bill can't be less than 1")
      return setTimeout(setToperror, 5000)
    } else {
      return tipPerPerson()
    }
  }

  //form
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // factory reset
  const handleReset = () => {
    setBill('')
    setPeople('')
    setTip('')
    setRandom('')
    setTipperperson(0)
    setPerperson(0)
    setNewerror('')
    setPannel(0)
  }

  return (
    <section className='bg-lightGrayishCyan min-h-screen flex flex-col space-y-6 justify-center items-center px-6 md:px-16 py-6 '>
      {/* logo */}
      <div className='w-14 md:w-full md:mx-auto flex justify-center mx-auto'>
        <img src={logo} alt='' />
      </div>
      {/* container */}
      <div className='bg-white shadow-lg rounded-lg flex flex-col justify-center items-center  mx-auto px-4 py-6 '>
        {/* calculator */}
        <div>
          <form
            className='space-y-10 md:space-y-0 md:flex justify-center items-start gap-10 '
            onSubmit={handleSubmit}
          >
            {/* bill area */}
            <div className='space-y-6 md:w-1/2 md:h-80'>
              {/* bill */}
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-spaceMono  text-darkGrayishCyan font-medium'>
                    Bill
                  </h1>
                  <p className='text-xs text-red-600 font-spaceMono font-bold animate-pulse'>
                    {toperror}
                  </p>
                </div>
                <div className='relative'>
                  <input
                    type='number'
                    placeholder='
                0'
                    className='text-right bg-lightGrayishCyan px-2 py-2 w-full border rounded-sm '
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                  />
                  <img src={dollar} alt='' className='absolute left-3 top-3' />
                </div>
              </div>
              {/* Select tip  */}
              <div className='space-y-2'>
                <h1 className='font-spaceMono  text-darkGrayishCyan font-medium '>
                  Select Tip %
                </h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 group '>
                  {pannel === 1 ? (
                    <button
                      className=' bg-strongCyan text-black rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => fiveperecent()}
                    >
                      5 %
                    </button>
                  ) : (
                    <button
                      className=' bg-darkCyan text-white rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => fiveperecent()}
                    >
                      5 %
                    </button>
                  )}
                  {pannel === 2 ? (
                    <button
                      className=' bg-strongCyan text-black rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => tenperecent()}
                    >
                      10 %
                    </button>
                  ) : (
                    <button
                      className=' bg-darkCyan text-white rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => tenperecent()}
                    >
                      10 %
                    </button>
                  )}
                  {pannel === 3 ? (
                    <button
                      className=' bg-strongCyan text-black rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => fiftheenrecent()}
                    >
                      15 %
                    </button>
                  ) : (
                    <button
                      className=' bg-darkCyan text-white rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => fiftheenrecent()}
                    >
                      15 %
                    </button>
                  )}
                  {pannel === 4 ? (
                    <button
                      className=' bg-strongCyan text-black rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => twentyfiveperecent()}
                    >
                      25 %
                    </button>
                  ) : (
                    <button
                      className=' bg-darkCyan text-white rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => twentyfiveperecent()()}
                    >
                      25 %
                    </button>
                  )}

                  {pannel === 5 ? (
                    <button
                      className=' bg-strongCyan text-black rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => fiftyperecent()}
                    >
                      50 %
                    </button>
                  ) : (
                    <button
                      className=' bg-darkCyan text-white rounded-md font-spaceMono px-2 py-2 font-bold hover:bg-strongCyan  hover:text-black '
                      onClick={() => fiftyperecent()}
                    >
                      50 %
                    </button>
                  )}
                  <input
                    type='number'
                    placeholder='Add value (%)'
                    className='text-center border rounded-md animate-pulse px-1'
                    value={random}
                    onChange={(e) => setRandom(e.target.value)}
                    onClick={() => hello()}
                  />
                </div>
              </div>
              {/* add people */}
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-spaceMono  text-darkGrayishCyan font-medium'>
                    Number of People
                  </h1>
                  <p className='text-xs text-red-600 font-spaceMono font-bold animate-pulse'>
                    {newerror}
                  </p>
                </div>

                <div className='relative'>
                  <input
                    type='number'
                    placeholder='
                0'
                    className='text-right bg-lightGrayishCyan px-2 py-2 w-full border rounded-sm '
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  />
                  <img src={person} alt='' className='absolute left-3 top-3' />
                </div>
              </div>
            </div>
            {/* total area clculated */}
            <div className='bg-darkCyan px-4 py-6 md:px-8 rounded-md md:py-12 space-y-8 md:w-1/2 flex flex-col   justify-between md:h-80'>
              <div className='space-y-8 '>
                {/* tip Amount per person */}
                <div className='flex justify-between'>
                  {/* text */}
                  <div>
                    <h1 className='font-spaceMono text-white font-medium'>
                      Tip Amount
                    </h1>
                    <h3 className='font-spaceMono text-white text-xs'>
                      / person{' '}
                    </h3>
                  </div>
                  {/* total */}
                  <div className='flex  items-center gap-1'>
                    <img src={dollar} alt='' />
                    <h1 className=' text-xl md:text-3xl font-bold text-strongCyan'>
                      {tipperperson}
                    </h1>
                  </div>
                </div>
                {/* Total per person */}
                <div className='flex justify-between'>
                  {/* text */}
                  <div>
                    <h1 className='font-spaceMono text-white font-medium'>
                      Total
                    </h1>
                    <h3 className='font-spaceMono text-white text-xs'>
                      / person{' '}
                    </h3>
                  </div>
                  {/* total */}
                  <div className='flex  items-center gap-1'>
                    <img src={dollar} alt='' />
                    <h1 className=' text-xl md:text-3xl font-bold text-strongCyan'>
                      {perperson}
                    </h1>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <button
                  className='bg-strongCyan text-black  py-2 font-medium rounded-md flex justify-center font-spaceMono w-full mx-auto '
                  onClick={() => calculate()}
                >
                  Calculate
                </button>
                {/* reset */}
                <button
                  className='bg-strongCyan text-black  py-2 font-medium rounded-md flex justify-center font-spaceMono w-full mx-auto'
                  onClick={() => handleReset()}
                >
                  Reset
                </button>
              </div>
              {/*  calculate */}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App
