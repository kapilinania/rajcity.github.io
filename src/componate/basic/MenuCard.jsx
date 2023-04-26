import React from 'react'

const MenuCard = ({menuData}) => {
 // console.log(dataValue);
  return (
    <>

        {menuData.map((curElement)=>{
          return (
            <>
              <div className="container"  key={curElement.id}>
                  <div className="row">
                      <div className='col-3 col-md-3'>
                      <div className="card">
                          <img src={curElement.image} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">{curElement.name}</h5>
                              <p className="card-text">{curElement.desc}</p>
                              <a href="#" className="btn btn-primary" >{curElement.category}</a>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>

            </>

          )

        })}


        
    
    </>
  )
}

export default MenuCard