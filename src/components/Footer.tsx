import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <hr className="mt-5 mb-4" />
      <p className="fs-5 text-muted">
        Address: 1234 Laser Avenue, Zurich, Switzerland{' '}|{' '}
        <Link 
        href= "https://www.google.com/maps/search/1234+Laser+Avenue,+Zurich,+Switzerland/@47.3773564,8.3966524,11z/data=!3m1!4b1?entry=ttu"
        target="_blank">
        <span>Show on Google Maps</span>
        </Link> <br></br>
        Contact Number: +41 123 456 789 <br></br>
        Open: 7 days between 8AM-7PM
      </p>
    </footer>
  );
};

export default Footer;
