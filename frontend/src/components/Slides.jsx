import { useState } from "react"


const Slides = () => {
    const [imageurl, setImageurl] = useState([
        {
            "id":1,
            "url":"https://th.bing.com/th/id/OIP.Hprf6YEJs5GidIf_pdFK5AHaEK?rs=1&pid=ImgDetMain"
        },
        {
            "id":2,
            "url":"https://th.bing.com/th/id/R.b4f2036005239adbebaa4a4f72e15b71?rik=YFJh8%2f3f0q7%2bhw&pid=ImgRaw&r=0"
        }
        
    ]);
    imageurl.map((item) => console.log(item.url))
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            {
                imageurl.map((item) => {
                    <div key={item.id} className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" 
                                src={item.url} 
                                alt={`My ${item.id} photo edit`} />
                        </div>
                    </div>             
                })
            }

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    </div>
  )
}

export default Slides