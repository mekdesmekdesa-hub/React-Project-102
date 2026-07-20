function Entry() {
  return (
    <div className="entry">
      <div className="entry-image-container">
       <img src="src/assets/Japan.png" alt="japan" className="japan-image"/>
      </div>
      <div className="entry-details">
      <div className="entry-details-1">
        <img src="src/assets/location.svg" alt="Location" className="location-icon"/>
        <p className="location">Japan</p>
        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="maps-link">View on Google Maps</a>
      </div>
      <div className="entry-details-2">
        <p className="title">Mount Fuji</p>  
        <h3 className="dates">12 Jan, 2021 - 24 Jan, 2021</h3>
        <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
      </div>
    </div>
  );
}
export default Entry;
