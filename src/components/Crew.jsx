import './Crew.css'
import info from '../assets/data.json'
import { useEffect, useMemo, useState } from 'react'

export default function Crew() {
  // const [data, setData] = useState(info.crew[0])
  const [name, setName] = useState(info.crew[0].name)
  // const [index, setIndex] = useState(0)

  // const handleClick = (body) => {
  //   setName(body)
  // }

  // useEffect(() => {
  //   const crew = info.crew.find((item) => item.name === name)
  //   setData(crew)
  // }, [name])

  const data = useMemo(() => {
    return info.crew.find((item) => item.name === name)
  }, [name])

  useEffect(() => {
    const interval = setInterval(() => {
      // setIndex((prevIndex) => (prevIndex + 1) % info.crew.length)
      // setData(info.crew[(index + 1) % info.crew.length])
      // setName(info.crew[(index + 1) % info.crew.length].name)

      const currentIndex = info.crew.findIndex((item) => item.name === name)
      const nextIndex = (currentIndex + 1) % info.crew.length
      setName(info.crew[nextIndex].name)
    }, 5000)

    return () => clearInterval(interval)
  }, [name])

  const highlight = {
    backgroundColor: '#ffffff',
  }

  return (
    <main>
      <section className='crewSection'>
        <div className='title'>
          <span>02</span> Meet your crew
        </div>
        <div className='contentGroup'>
          <div className='contentTxt'>
            <div className='text'>
              <div className='titleText'>{data.role}</div>
              <div className='name'>{data.name}</div>
              <div className='desc'>{data.bio}</div>
            </div>
            <div className='navi'>
              {info.crew.map((item) => (
                <button
                  style={name === item.name ? highlight : {}}
                  type='button'
                  key={item.name}
                  onClick={() => setName(item.name)}></button>
              ))}
            </div>
          </div>
          <div className='img'>
            <img
              src={data.images.png}
              alt={data.name}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
