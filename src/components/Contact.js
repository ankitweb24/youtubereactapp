import Footer from './Footer';
const Contact = () => {
  return (
    <>
      <h2 className="heading">Contact Us</h2>
      <p className="ctnHeadp">
        Please Fill In Your Information And We'll Be Sending Your Order To Time.
      </p>

      <form action="">
        <div className="form_control">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            placeholder="enter your name"
            name=""
            id="name"
          />
        </div>
        <div className="form_control">
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            placeholder="enter your correct email"
            name=""
            id="email"
          />
        </div>
        <div className="form_control">
          <label htmlFor="phone">Phone</label>
          <input
            required
            type="number"
            placeholder="valid Phone"
            name=""
            id="phone"
          />
        </div>
        <div className="form_control">
          <label htmlFor="msg">Write Your Message</label>
          <textarea
            required
            name=""
            id="msg"
            cols="30"
            placeholder="type your message"
            rows="10"
          ></textarea>
        </div>
        <button>submit form</button>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
