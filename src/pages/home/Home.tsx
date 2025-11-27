
import "./Home.css";
export default function Home(){
    return(
        <>
        
        {true
        ? 
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h1>Hello fdfd</h1>
                </div>
                <div className="col-6">
                     <h1>Hello fdfd</h1>
                </div>
                <div className="col-4 bg-black">
                     <h1>Hello fdfd</h1>
                </div>
            </div>
        </div>
        :
        <>
        <div 
        className="home-overlay">
        </div>
        <div className="home-content">
            <h1 className="display-3 welcome-text text-white">Welcome to the start of your journey</h1>
        </div>
        </>}

       
        </>
    )
}