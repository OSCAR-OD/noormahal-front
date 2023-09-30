import Link from "next/link"
import "./BookForm.css";

const BookForm = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form_book">
              <div className="row">
                <div className="col-md-3">
                  <label className="date">ARRIVAL DATE</label>
                  <input className="book_n" type="date" />
                </div>
                <div className="col-md-3">
                  <label className="date">DEPARTURE DATE</label>
                  <input className="book_n" type="date" />
                </div>
                <div className="col-md-3">
                  <label className="date">PERSON</label>
                  <input
                    className="book_n"
                    placeholder="2"
                    type="type"
                    name="2"
                  />
                </div>
                <div className="col-md-3">
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