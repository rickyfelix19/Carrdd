import { useState } from 'react'

import { Button, Footer, Header, Summary } from './components'

function App() {
  return (
    //
    <div className="w-full overflow-hidden">

      {/* container */}
      <div>
        {/* header */}
        <div>
          Header
          Button Primary
          Button Secondary
        </div>

        {/* summary */}
        <div>
          Summary
          Button Tertiary
        </div>

        {/* footer */}
        <div>
          Footer
        </div>

      </div>
    </div>
  )
}

export default App

// tailwind button: className = "mx-auto inline-block rounded-full bg-blue-600 px-5 py-2 align-middle font-semibold text-white no-underline hover:bg-blue-700 md:mx-0"
