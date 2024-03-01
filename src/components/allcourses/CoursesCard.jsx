import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Link } from "react-router-dom"
import img from "./image.png"

const CoursesCard = () => {
  return (

    <>
      <h1 className="mid">Courses</h1>
      <section id="Course" className='coursesCard'>
        <div className='cont'>
          {coursesCard.map((val) => (
            <div className='items'>
              
              <div className='content flex'>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <img src={img} alt="" />
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div> */}
              <Link to={`/Courses/${val.id}`}>
              <button className='outline-btn'>ENROLL NOW !</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
