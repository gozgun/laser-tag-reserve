import React, { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReservationForm from './ReservationForm';
import ICalendarLink from 'react-icalendar-link';
import Link from "next/link";

// AppMain containts the form submission, confirmation/display of form data.


// FormData defines the expected properties and their type.
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  numOfPeople: number;
  date: Date;
  time: string;
  eventType: string;
  comments: string;
}


const AppMain: React.FC = () => {
  // useState hook in React is used to create a state variable to hold the form information. 
  // setFormResult is used to update the value of formResult with the submitted form data.
  // Initial value of formResult is null, meaning, result of the form is not available.
  const [formResult, setFormResult] = useState<FormData | null>(null);

  // Updates the form data.
  const handleFormSubmit = (data: FormData) => {
    setFormResult(data);
  };

  // useRef and reservationFormRef are used to create a reference to the beginning of the reservation form which is a DOM element.
  const reservationFormRef = useRef<HTMLDivElement>(null);

  // Revoked when the click event for "Reserve Your Spot" and scrolls to the reservation form.
  const handleReserveClick = () => {
    reservationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h2>Are you ready?</h2>
      <button type="button" className="submit-button" onClick={handleReserveClick}>
        Reserve Your Spot
      </button>
      <hr className="col-1 my-5 mx-0" />
      <Row>
        <div ref={reservationFormRef}>
          <p className="fs-4">
            Please fill the following fields to reserve your slot. You will receive a confirmation to the email address you provided.
            If you have not received it within 5 minutes after your submission, please check your spam box.
            Your latest submission will be taken account.
          </p>
        </div>
        <Col lg={6}>
            {/* Invokes the function when the form is submitted */}
            <ReservationForm onFormSubmit={handleFormSubmit} />
        </Col>
        <Col lg={6}>
        {formResult && (
            <div className="reservation-background fs-5">
              <h2>Booking Summary</h2>
              <h3>Event Details </h3>
              <p> Successfully reserved a slot on: {formResult.date.toISOString().substring(0,10)} {formResult.time}:00 (1 hour)  </p>
              <p> Number of people: {formResult.numOfPeople}</p>
              <p> Event type: {formResult.eventType}</p>
              <p>Comments: {formResult.comments ? formResult.comments : '-'}</p>
              <p> Address: <Link 
                  href= "https://www.google.com/maps/search/1234+Laser+Avenue,+Zurich,+Switzerland/@47.3773564,8.3966524,11z/data=!3m1!4b1?entry=ttu"
                  target="_blank">
                  <span>1234 Laser Avenue, Zurich, Switzerland</span>
                  </Link></p>
              <h3> Contact details</h3>
              <p>Full Name: {formResult.firstName} {formResult.lastName} </p>
              <p>Email: {formResult.email}</p>

              {/* Creates an ics file for the event
                  TODO: Render the dates for startTime and endTime
              */}
              <ICalendarLink
                event={{
                  title: 'Booking Summary',
                  description: 'Photon Strike Laser Tag',
                  startTime: '2023-10-07T10:30:00+10:00',
                  endTime: '2023-10-07T12:00:00+10:00',
                  location: '1234 Laser Avenue, Zurich, Switzerland',
                }}
              >
                Add to Calendar
              </ICalendarLink>
            </div>
          )}

        </Col>
      </Row>
    </div>
  );
};

export default AppMain;
