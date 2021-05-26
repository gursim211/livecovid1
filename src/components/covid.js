import React, { useEffect , useState} from 'react'
import './covid.css'

const Covid = () => {

    const [data,setData]= useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log("error");

        }

    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <div className="bg-info "style={{height: '100' , paddingBottom : 100}}>
            <div className="text-center  py-5">
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Live</span>
                </div>
                <h2>Covid-19 Live Tracker.</h2>
            </div>
            <div className="container">
                <div className="row my-5  ">
                    <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-primary mb-3 mx-5" style={{ 'max-width': '18rem', height :180}}>
                        <div className="card-header text-center"><h3>Our  Country</h3></div>
                        <div className="card-body">
                            <h2 className="card-title text-center ">India</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-dark mb-3 mx-5" style={{ 'max-width': `18rem`, height: 180 }}>
                        <div className="card-header text-center">Total Active Cases.</div>
                        <div className="card-body">
                            <h5 className="card-title text-center my-4">{data.active}</h5>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-secondary mb-3 mx-5" style={{ 'max-width': `18rem`, height: 180 }}>
                        <div className="card-header text-center">Total Confirmed Cases.</div>
                        <div className="card-body">
                            <h5 className="card-title text-center my-4">{data.confirmed}</h5>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-danger mb-3 mx-5" style={{ 'max-width': `18rem`, height: 180 }}>
                        <div className="card-header text-center" >Total Deaths.</div>
                        <div className="card-body">
                            <h5 className="card-title text-center my-4">{data.deaths }</h5>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-success mb-3 mx-5" style={{ 'max-width': `18rem`, height: 180 }}>
                        <div className="card-header text-center">Total Recovered</div>
                        <div className="card-body">
                            <h5 className="card-title text-center my-4">{data.recovered}</h5>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card text-white bg-warning mb-3 mx-5" style={{ 'max-width': `18rem`, height: 180 }}>
                        <div className="card-header text-center">Last Updated at  </div>
                        <div className="card-body">
                            <h5 className="card-title text-center my-4">{data.lastupdatedtime}</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Covid
