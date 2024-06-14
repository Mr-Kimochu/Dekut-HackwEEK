import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api'; // Import GoogleMap, LoadScript, and Polygon from @react-google-maps/api
import styles from '../styles/Home.module.css';
import Navigation from './Navigation';
import Modal from './Modal';

const Details = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`/api/greencap/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [id]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCredits, setSelectedCredits] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePurchaseClick = () => {
    setShowModal(true);
  };

  const handleOrderSubmit = () => {
    // Handle the order submission with selectedCredits and selectedPaymentMethod
    // You can perform the necessary actions, such as making an API call to process the order
    // Once the order is submitted, you can close the modal or reset the form
    setShowModal(false);
    setSelectedCredits(0);
    setSelectedPaymentMethod('');
  };


  return (
    <div>
      <Navigation />
      {project ? (
        <div>
          <div className={styles.projectDetails}>
            <h2>{project.title}</h2>
            <h3>Verified Credits: 2300</h3>
            <h3>Description</h3>
          <p>{project.description}</p>
          <h3>Goal</h3>
          <p>{project.goal}</p>
          <h3>Methodology</h3>
          <p>{project.methodology}</p>
          <h3>Date Initiated</h3>
          <p>{project.date}</p>
            {/* Other project details */}
          </div>
          <div className={styles.map}>
          <LoadScript googleMapsApiKey="AIzaSyAWTUsd4R2T18FYkU5e9H5Pwd5DqoAEWC0"> {/* Replace YOUR_API_KEY with your actual Google Maps API key */}
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={{ lat: -1.2921, lng: 36.8219 }} // Replace YOUR_LATITUDE and YOUR_LONGITUDE with actual coordinates
              zoom={17}
            >
              <Polygon
                
                paths={[
                  { lat: -1.2900, lng: 36.8226 },
                  { lat: -1.2915, lng: 36.8210 },
                  { lat: -1.2927, lng: 36.8205 },
                  { lat: -1.2000, lng: 36.8400 }
                ]} // Replace project.polygonCoordinates with the actual set of coordinates for the polygon
                options={{
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 3,
                  fillColor: "#FF0000",
                  fillOpacity: 0.35,
                }}
              />
              {/* Additional polygons or components can be added here */}
            </GoogleMap>
          </LoadScript>
          </div>
          <button className={styles.button1} onClick={handlePurchaseClick}>Purchase Credits</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <h2>Make an Order</h2>
              <form onSubmit={handleOrderSubmit}>
                <label htmlFor="credits">Select amount of credits:</label>
                <input
                  type="number"
                  id="credits"
                  value={selectedCredits}
                  onChange={(e) => setSelectedCredits(e.target.value)}
                />
                <label htmlFor="paymentMethod">Select payment method:</label>
                <select
                  id="paymentMethod"
                  value={selectedPaymentMethod}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  {/* Add more payment method options as needed */}
                </select>
                <button type="submit">Make Order</button>
              </form>
            </Modal>
          )}
        </div>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default Details;
