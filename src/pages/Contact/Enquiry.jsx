import "./ContactPages.css";

const Enquiry = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Enquiry</h1>
        <p className="subtitle">
          Please fill out the form below and our team will get back to you shortly.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email address" required />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="tel" placeholder="Enter your contact number" required />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter your city" required />
          </div>

          {/* ✅ Recruitment Message Box */}
          <div className="form-group">
          <label>Requirement</label>
          <textarea
           rows="4"
           placeholder="Write your requirement details here..."
           required
           ></textarea>
           </div>

          <button type="submit" className="submit-btn">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Enquiry;

