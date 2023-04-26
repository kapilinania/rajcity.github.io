import React from 'react'

const MenuCard = ({menuData}) => {
 // console.log(dataValue);
  return (
    <>

        {menuData.map((curElement)=>{
          return (
            <>
              
                      <div className='col-3 col-md-3 mb-5' key={curElement.id} >
                      <div className="card" height={500}>
                          <img src={curElement.image} className="card-img-top" alt="..." height={250}/>
                          <div className="card-body">
                              <h5 className="card-title">{curElement.name}</h5>
                              <p className="card-text text-justify">{curElement.desc}</p>
                              <a href="#" className="btn btn-primary" >{curElement.category}</a>
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