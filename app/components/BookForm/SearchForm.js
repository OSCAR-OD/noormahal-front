import "./BookForm.css";

const SearchForm = () => {
  return (
    <div className="hero-form-wrapper">
    <form action="" className="hero-form">
      <div className="input-wrapper">
        <label htmlFor="search" className="input-label">
          Search : *
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search your home"
          required
          className="input-field"
        />
        <ion-icon name="search-outline"></ion-icon>
      </div>

      <div className="input-wrapper">
        <label htmlFor="category" className="input-label">
          Select Categories:
        </label>
        <select name="category" id="category" className="dropdown-list">
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="offices">Offices</option>
          <option value="townhome">Townhome</option>
        </select>
      </div>

      <div className="input-wrapper">
        <label htmlFor="min-price" className="input-label">
          Min Price :
        </label>
        <select name="min-price" id="min-price" className="dropdown-list">
          <option value="min price">Min Price</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
        </select>
      </div>

      <div className="input-wrapper">
        <label htmlFor="max-price" className="input-label">
          Max Price :
        </label>
        <select name="max-price" id="max-price" className="dropdown-list">
          <option value="max price">Max Price</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Search now
      </button>
    </form>
    </div>
  );
};

export default SearchForm;