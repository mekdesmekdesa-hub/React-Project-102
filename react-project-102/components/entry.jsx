function Entry(props    ) {
  return (
    <div className="entry">
      <div className="entry-image-container">
       <img src={props.img.src} alt={props.img.alt} className="japan-image"/>
      </div>
      <div className="entry-details">
      <div className="entry-details-1">
        <img src="src/assets/location.svg" alt="Location" className="location-icon"/>
        <p className="location">{props.country}</p>
        <a href={props.googleMapsLink} className="maps-link">View on Google Maps</a>
      </div>
      <div className="entry-details-2">
        <p className="title">{props.title}</p>  
        <h3 className="dates">{props.dates}</h3>
        <p className="description">{props.text}</p>
      </div>
      </div>
    </div>
  );
}
export default Entry;
