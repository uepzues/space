import './Technology.css'
import { useState, useEffect } from 'react'
import info from '../assets/data.json'
export default function Technology() {
  const [data, setData] = useState(info.technology[0])
  const [name, setName] = useState(info.technology[0].name)

  useEffect(() => {
    const tech = info.technology.find((item) => item.name === name)
    setData(tech)
  }, [name])

  const style = {
    backgroundColor: '#ffffff',
    color: 'black',
  }

  const handleClick = (body) => {
    setName(body)
  }
  return (
    <main className='techMain'>
      <section className='techSection'>
        <h2 className='techTitle'>
          <span>03 &nbsp;</span> Space launch 101
        </h2>
        <div className='techContent'>
          <div className='pageAndExplain'>
            <div className='pagination'>
              {info.technology.map((item, index) => (
                <button
                  style={name === item.name ? style : {}}
                  key={item.name}
                  onClick={() => handleClick(item.name)}>
                  {index + 1}
                </button>
              ))}
            </div>
            <div className='explanation'>
              <div className='termAndItem'>
                <h1>The terminology...</h1>
                <h2>{data.name}</h2>
              </div>
              <div className='description'>{data.description}</div>
            </div>
          </div>
          <div className='img'>
            <img
              src={data.images.portrait}
              alt={data.name}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
