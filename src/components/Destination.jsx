import { useState, useEffect, useMemo } from 'react'
import info from '../assets/data.json'
import './Destination.css'
export default function Destination() {
  const [destination, setDestination] = useState('Moon')
  const data = useMemo(() => {
    return info.destinations.find((item) => item.name === destination)
  }, [destination])

  const handleClick = (body) => {
    setDestination(body)
  }

  const underline = {
    borderBottom: '2px solid white',
  }

  return (
    <main>
      <section className='content'>
        <h2 className='page-title'>
          <span>01 &nbsp;</span>Pick your destination
        </h2>
        <div className='contentText'>
          <div className='image'>
            <img
              src={data.images.png}
              alt='moon'
            />
          </div>
          <div className='article'>
            <div className='text'>
              <div className='tabs'>
                <ul>
                  {info.destinations.map((dest) => (
                    <li
                      style={dest.name === destination ? underline : {}}
                      key={dest.name}
                      onClick={() => handleClick(dest.name)}>
                      {dest.name}
                    </li>
                  ))}
                </ul>
              </div>
              <h1 className='desName'>{data.name}</h1>
              <p className='articleText'>{data.description}</p>
              {/* <hr /> */}
              <div className='stats'>
                <div className='distance'>
                  <p className='statTitle'>Avg. Distance</p>
                  <p className='statData'>{data.distance}</p>
                </div>
                <div className='travel'>
                  <p className='statTitle'>Est. Travel Time</p>
                  <p className='statData'>{data.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
