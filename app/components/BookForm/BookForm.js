import Link from "next/link"
import "./BookForm.css";

const BookForm = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="bookFormContainer">
            <form className="form_book">
              <div className="row">
                <div className="formFieldContainer">
                  <label className="date">ARRIVAL DATE</label>
                  <input className="book_n" type="date" />
                </div>
                <div className="formFieldContainer">
                  <label className="date">DEPARTURE DATE</label>
                  <input className="book_n" type="date" />
                </div>
                <div className="formFieldContainer person">
                  <label className="date ">PERSON</label>
                  <input
                    className="book_n"
                    placeholder="2"
                    type="type"
                    name="2"
                  />
                </div>
                <div className="formFieldContainer bookButton">
                  <button className="book_btn">Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookForm;