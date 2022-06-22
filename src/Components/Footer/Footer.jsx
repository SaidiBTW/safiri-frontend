import "./footer.css";
import { Paper, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooterDiv">
        <Paper elevation={4} className="mainPaper">
          <ul className="fList">
            <li className="fListItem">
              {" "}
              <strong id="strong">Towns</strong>{" "}
            </li>
            <li className="fListItem">Nakuru</li>
            <li className="fListItem">Kisumu</li>
            <li className="fListItem">Nairobi</li>
            <li className="fListItem">Kitale</li>
            <li className="fListItem">Kericho</li>
          </ul>

          <ul className="fList">
            <li className="fListItem">
              {" "}
              <strong id="strong">Services</strong>{" "}
            </li>
            <li className="fListItem">Lunch Stopovers</li>
            <li className="fListItem">Luggage trabsport</li>
            <li className="fListItem">Travel communities </li>
            <li className="fListItem">Seasonal and holiday deals </li>
          </ul>

          <ul className="fList">
            <li className="fListItem">
              {" "}
              <strong id="strong">Customer Services</strong>{" "}
            </li>
            <li className="fListItem">Wifi Facilities</li>
            <li className="fListItem">Fixed Prices</li>
          </ul>
        </Paper>

        <div className="copyright">
          <span>Copyright ©</span> 2022 SafiriBooking.
        </div>
      </div>
    </div>
  );
};

export default Footer;
