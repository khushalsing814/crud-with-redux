import React from 'react'

function Main() {
  return (
    <>

    <div className='container max_width max_height'>
      <h1 className='mt-4'>Shop by category</h1>
      <div className="row">
        <div className='col-sm-6'>
          <div className='parent'>
            <img src='https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/sports-wear-store-category-img-1.jpg'></img>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='parent'>
            <img src='https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/sports-wear-store-category-img-1.jpg'></img>
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div className='parent'>
            <img src='https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/sports-wear-store-category-img-1.jpg'></img>
          </div>
        </div>
        <div className='col-sm-6 mt-3'>
          <div className='parent'>
            <img src='https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/sports-wear-store-category-img-1.jpg'></img>
          </div>
        </div>
      </div>
    </div>

    <div className='container max_width mt-5 position-relative'>
    <div className='height_width'>
    <div className='row'>
     <div className='col-sm-4'>
     <h1 style={{color:"white" ,padding: 36}}>Trending sports <br/> wear for</h1>
     </div>
     <div className='col-sm-4'>
      <div className='img_parent'>
        <img src='https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/sports-wear-store-more-category-img-1.jpg'></img>
    <h3 style={{color:"white", marginTop:10}}>Men</h3>
      </div>
     </div>
     <div className='col-sm-4'>
     <h3 style={{color:"white", marginTop:36}}>Women</h3>
      <div className='img_parent position-absolute bottom-0'>
        <img className='position-absolute bottom-0' src='https://websitedemos.net/sports-wear-store-04/wp-content/uploads/sites/828/2021/04/sports-wear-store-more-category-img-2.jpg'></img>
      </div>
     </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default Main
