import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const PackageDetails = () => {
    let { packageId } = useParams();
    const [packageDetails, setPackageDetails] = useState([]);
    const [singlePackageDetails, setSinglePackageDetails] = useState({});

    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/limitless-tourism/service.json`)
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [])

    useEffect(() => {
        const foundPackage = packageDetails.find(packages => packages._id === packageId);
        setSinglePackageDetails(foundPackage)
    }, [packageDetails, packageId])

    
    return (
        <div className=" rounded-box mx-auto">
            <h2 className=" py-10 text-center text-4xl font-bold text-gray-700">{singlePackageDetails?.country} </h2>
            <img className="mx-auto rounded-box" src={singlePackageDetails?.imgURL} alt="" />
            <h2 className="text-gray-500 pt-10 w-5/6 lg:w-2/5 mx-auto pb-2"> {singlePackageDetails?.description} </h2>
            <h2 className="text-gray-700 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl font-bold">Duration: {singlePackageDetails?.duration} Days </h2>
            <h2 className="text-gray-700 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl font-bold">For: {singlePackageDetails?.people} Person  </h2>
            <h2 className="text-gray-700 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl font-bold">Ratings: <i className="fas fa-star text-yellow-500"></i>
                {singlePackageDetails?.ratings} </h2> 
            <h2 className="text-gray-800 pt-5 w-5/6 lg:w-2/5 mx-auto pb-20 text-xl font-bold">Package Price: <span className="text-yellow-500 text-2xl font-bold"> {singlePackageDetails?.price}</span> BDT </h2>
            <NavLink to={`/booking/${singlePackageDetails?._id}`}><button className="px-16 py-4 mb-10 bg-gray-700 rounded-full hover:bg-yellow-400 text-yellow-300 hover:text-gray-800 transition duration-300 ">Book This Service</button></NavLink>
        </div>
    );
};

export default PackageDetails;