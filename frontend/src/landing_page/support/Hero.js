function Hero() {
  return (
    <section className="container-fuild" id="supportHero">
      <div className="container">
        <div className="p-5 mx-0" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row">
          <div className="col-6 p-5 mb-3">
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
            <input type="text" placeholder="Eg:how do i activate F&O,why is my order getting rejected.."></input><br/>
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 p-5">
            <h1>Featured</h1>
            <ol>
              <li><a href="" style={{lineHeight:"2.5"}}>Current Takeovers and Delisting-January 2025</a></li>
              <li><a href="" style={{lineHeight:"2.5"}}>Latest intraday leverages-MIS & CO</a></li>
            </ol>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
