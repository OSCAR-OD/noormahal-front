"use client"
import Banner from "../components/Banner/Banner";
import BookForm from "../components/BookForm/BookForm";
import NewBookForm from "../components/BookForm/NewBookForm";
import SearchForm from "../components/BookForm/SearchForm";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import InRoomServices from "../components/Services/InRoomServices";
import RoomServices from "../components/Services/RoomServices";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <BookForm />
      <Hero />
      <RoomServices />
    {/* <NewBookForm />
      <SearchForm /> 
       <Services />  */}
      <InRoomServices />
     
    </main>
  );
};

export default HomePage;
