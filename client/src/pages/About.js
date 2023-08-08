//  import Clock from "../components/Container/Clock"
import Navbar from "../components/navbar/navApp";
import Card from './Card';

export default function Home() {

 return (
   <>
   
   <Navbar />
    
   <h1>About Page</h1>
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod aut maiores magni, aspernatur modi nobis, quasi quis quaerat iure reprehenderit rerum minus perspiciatis aliquam hic fuga exercitationem eum et numquam laudantium expedita ipsam. Doloremque magnam quibusdam consequuntur ducimus at nulla deserunt quam dolorum corrupti molestias sed possimus repellendus qui nesciunt voluptatum eius odit nam facilis error deleniti sunt veritatis, consectetur veniam! Voluptatibus accusamus similique sunt ducimus optio perspiciatis repellat rem est asperiores alias deleniti doloremque autem ex quod, eius, doloribus aspernatur nulla. Doloremque mollitia quos eligendi quas, aperiam explicabo? Quidem accusantium animi qui molestias reprehenderit deleniti, nostrum modi quaerat.
    
     <div className="card-container">
        <Card
          title="New Student"
          // imageSrc="https://scert.bihar.gov.in/public/website/images/books/Book%20Class%201.PNG"
          description="New Student Registration"
          link="/create"
        />
        <Card
          title="Update Fees"
          // imageSrc="https://scert.bihar.gov.in/public/website/images/books/Book%20Class%205.PNG"
          description="Student Fees Will be updated here "
          link="/updatefees"
        />
         <Card
          title="Upload Files"
          // imageSrc="https://scert.bihar.gov.in/public/website/images/books/Book%20Class%208.PNG"
          description="Class Document will be uploaded here "
          link="./record"
        />
         <Card
          title="Attendance"
          // imageSrc="https://scert.bihar.gov.in/public/website/images/books/Book%20Class%209.PNG"
          description="Attendance data will be updated here."
          link="./record"
        />
     
      </div>
      <h1>....</h1>
      {/* <Clock />  */}
     <footer> <h1>&copy; 2023 Study Addict. All rights reserved.</h1></footer>
   </>
   
 )
}