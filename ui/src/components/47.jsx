import { useState } from 'react'

import '../css/47.css'
import F1560 from './1560'

function F47() {
  const [count, setCount] = useState(0)

  return (
    <div className="group-47">
      <div className="frame-1453">
        <p className="most-popular-this-month">Most Popular this month</p>
        <p className="see-all">See all</p>
      </div>
      <div className="frame-brand">
        <F1560/>
        <F1560/>
        <F1560/>
      </div>
    </div>
  )
}

export default F47
