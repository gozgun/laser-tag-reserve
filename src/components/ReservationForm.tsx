import React, { useState } from 'react';

// FormData defines the expected properties and their type.
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  numOfPeople: number;
  date: Date;
  time: string;
  eventType: string; // Users can choose the event type as an extra feature.
  comments: string;
}

// Defines the expected properties for ReservationForm component.
interface ReservationFormProps {
  onFormSubmit: (data: FormData) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    numOfPeople: 1, // At least one person can reserve
    date: new Date(),
    time: '08',
    eventType: '',
    comments: '',
  });

  // Handles input change for form fields.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === 'numOfPeople') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: parseInt(value, 10), // convert to Int
      }));
    } else if (name === 'date') {
      const selectedDate = new Date(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: isNaN(selectedDate.getTime()) ? new Date() : selectedDate, // checks if the date is valid
      }));
    } else if (name === 'time') {
      const selectedTime = value.substring(0, 2);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: selectedTime,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // Handles form submission.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform range check for numOfPeople
    const clampedNumOfPeople = Math.max(1, Math.min(formData.numOfPeople, 50));

    // Email address must contain @ and . chars
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      // Invalid email domain
      alert('Invalid email domain');
      return;
    }

    const updatedFormData = {
      ...formData,
      numOfPeople: clampedNumOfPeople,
    };

    onFormSubmit(updatedFormData);
  };

  // Resets the form fields.
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      numOfPeople: 1,
      date: new Date(),
      time: '08',
      eventType: '',
      comments: '',
    });
  };

  function getNextDayISOString() {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    return tomorrow.toISOString().substring(0, 10);
  }
  

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} placeholder="John" onChange={handleInputChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} placeholder="Doe" onChange={handleInputChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} placeholder="example@example.com" onChange={handleInputChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="numOfPeople">Number of People (1-50):</label>
          <input type="number" id="numOfPeople" name="numOfPeople" value={formData.numOfPeople} onChange={handleInputChange} min="1" max="50" required />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date (MM/DD/YYYY):</label>
          <input type="date" id="date" name="date" value={formData.date.toISOString().substring(0, 10)} onChange={handleInputChange} min={getNextDayISOString()} required />
        </div>
        <div className="form-field">
          <label htmlFor="time">Time (First entry: 8AM, last entry: 6PM):</label>
          <input type="time" id="time" name="time" value={`${formData.time}:00`} onChange={handleInputChange} min="08:00" max="18:00" required />
        </div>
        <div className="form-field">
          <label htmlFor="eventType">Event Type (Optional):</label>
          <select id="eventType" name="eventType" value={formData.eventType} onChange={handleInputChange}>
            <option value="">Select Event Type</option>
            <option value="Birthday">Birthday</option>
            <option value="Business Event">Business Event</option>
            <option value="Casual">Casual</option>
            <option value="Party">Party</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="comments">Comments (Optional):</label>
          <textarea id="comments" name="comments" value={formData.comments} placeholder="Please share if you have any special requests or needs" onChange={handleInputChange} />
        </div>
        <br></br>
        <div>
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="reset" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
