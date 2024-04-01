import React from 'react'

const RecommandedCard = ({props}) => {
  
    let id =props.imgUrl.split('/d/')[1].split('/view')[0];
  let imageUrl="https://lh3.googleusercontent.com/d/" + id 
  
  return (
    <div className=''>
     
      <img src={imageUrl} alt='loading'/>
    </div>
  )
}

export default RecommandedCard
