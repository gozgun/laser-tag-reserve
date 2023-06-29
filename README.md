# Laser Tag Session Booker

A simple frontend app that allows users to book a laser tag session.

# Instructions

This app uses [React](https://react.dev/), [Next.js](https://nextjs.org/), [React Bootstrap](https://react-bootstrap.github.io/) and [react-icalendar-link](https://github.com/josephj/react-icalendar-link).

The backbone of the app is taken from Bootstrap w/ React example which can be found [here](https://github.com/twbs/examples/tree/main/react-nextjs/).

Requirements
- npm

## How to use
```sh
git clone https://github.com/gozgun/laser-tag-reserve.git
cd laser-tag-reserve
npm install
npm start
```
All of the necessary packages are installed, one can simply go to [http://localhost:3000/](http://localhost:3000/)

## Features
- Users can read short information about the facility and click on the "Reserve Your Spot" button to be moved to the reservation form. They can also scroll down to find the form.
- Initially only the form is visible, after correct submission the confirmation receipt is shown.
- Users have to fill all the required fields correctly to be able to submit. 
- Input checks are present for fields with the following rules:
    - First name and last name: at least 1 character
    - Email: @ and domain name must be present in the right order
    - Number of people: must be between 1-50 (by default it is 1)
    - Date desired for the laser tag session: the earliest booking can be done for next day to avoid entering past date.
    - Time desired for the laser tag session: Users can only change the hour part (hence 1h sessions) and only values between 8AM and 7PM (excluded) are approved.
- There are no input checks for optional fields of Comments and Event Type.
- Users have access to an ics file to mark the event on their personal calenders, the file includes the event title, start and end time and the location.

## Future Work
- Allow booking multiple sessions back to back.
- Working with date and time together to allow booking for "today" and accurate time information in the ics file.
- Email validation of case "a@example" without a pop-up page.
- QR code creation for the events.
