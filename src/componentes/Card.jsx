
const Card = ({ data }) => {
  return (
  <>
    <div>
      <div className="divCard">
        <div className="divImage">
          <img className="imageCard" 
          src={data.photo} 
          alt={data.title} />
        </div>
        <div className="cardInfo">
          <div>
            {data.superHost ? (
              <span className="superhost">
                SUPER HOST
              </span>
            ) : ( ""
            )}
            <span className="spanInfo">
              {data.type}. {data.beds} beds
            </span>
          </div>{
          <div>
            <i><img className="starIcon" src="https://png-3.vector.me/files/images/3/1/316482/red_star_preview" /></i>
            <span> {data.rating} </span>
          </div>
          }
        </div>
        <h2>{data.title}</h2>
      </div>
    </div>
  </>  
    
  )
}

export default Card