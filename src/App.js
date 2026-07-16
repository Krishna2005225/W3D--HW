import React from 'react';

// Props Components (Tasks 1-10)
import Student from './components/props/Student';
import EmployeeCard from './components/props/EmployeeCard';
import ProductCard from './components/props/ProductCard';
import MovieCard from './components/props/MovieCard';
import BookCard from './components/props/BookCard';
import CourseCard from './components/props/CourseCard';
import ProfileCardProps from './components/props/ProfileCard';
import StudentList from './components/props/StudentList';
import CompanyCard from './components/props/CompanyCard';
import Button from './components/props/Button';

// Conditional Rendering Components (Tasks 11-20)
import LoginStatus from './components/conditional/LoginStatus';
import StockStatus from './components/conditional/StockStatus';
import PassFail from './components/conditional/PassFail';
import AgeStatus from './components/conditional/AgeStatus';
import PremiumBadge from './components/conditional/PremiumBadge';
import DiscountLabel from './components/conditional/DiscountLabel';
import OnlineOffline from './components/conditional/OnlineOffline';
import RoleDashboard from './components/conditional/RoleDashboard';
import Greeting from './components/conditional/Greeting';
import ProfileImage from './components/conditional/ProfileImage';

// Combined Components (Tasks 21-30)
import StudentCard from './components/combined/StudentCard';
import EmployeeCardCombined from './components/combined/EmployeeCard';
import MovieCardCombined from './components/combined/MovieCard';
import ProductCardCombined from './components/combined/ProductCard';
import CourseCardCombined from './components/combined/CourseCard';
import RestaurantCard from './components/combined/RestaurantCard';
import WeatherCard from './components/combined/WeatherCard';
import ProfileCard from './components/combined/ProfileCard';
import JobCard from './components/combined/JobCard';
import StudentDashboard from './components/combined/StudentDashboard';

// Advanced Components (Tasks 31-60)
import LaptopCard from './components/advanced/LaptopCard';
import MobileCard from './components/advanced/MobileCard';
import CarCard from './components/advanced/CarCard';
import FlightCard from './components/advanced/FlightCard';
import HotelCard from './components/advanced/HotelCard';
import DoctorCard from './components/advanced/DoctorCard';
import MedicineCard from './components/advanced/MedicineCard';
import FoodCard from './components/advanced/FoodCard';
import MovieCard18 from './components/advanced/MovieCard18';
import CourseCardBest from './components/advanced/CourseCardBest';
import BookCardStock from './components/advanced/BookCardStock';
import CustomerCard from './components/advanced/CustomerCard';
import PlayerCard from './components/advanced/PlayerCard';
import TeacherCard from './components/advanced/TeacherCard';
import BankAccountCard from './components/advanced/BankAccountCard';
import BusTicketCard from './components/advanced/BusTicketCard';
import OrderCard from './components/advanced/OrderCard';
import EmployeeCardPromo from './components/advanced/EmployeeCardPromo';
import JobCardHiring from './components/advanced/JobCardHiring';
import QuizCard from './components/advanced/QuizCard';
import TaskCard from './components/advanced/TaskCard';
import NotificationCard from './components/advanced/NotificationCard';
import WeatherCardAdv from './components/advanced/WeatherCardAdv';
import PaymentCard from './components/advanced/PaymentCard';
import StudentCardScholarship from './components/advanced/StudentCardScholarship';
import ProductCardDelivery from './components/advanced/ProductCardDelivery';
import RestaurantCardDelivery from './components/advanced/RestaurantCardDelivery';
import GymMemberCard from './components/advanced/GymMemberCard';
import SubscriptionCard from './components/advanced/SubscriptionCard';
import Dashboard from './components/advanced/Dashboard';

// Bonus Components (Tasks 61-70)
import ProductGrid from './components/bonus/ProductGrid';
import StatusBadge from './components/bonus/StatusBadge';
import AlertBox from './components/bonus/AlertBox';
import ReusableButton from './components/bonus/ReusableButton';
import EmployeeDirectory from './components/bonus/EmployeeDirectory';
import MovieGallery from './components/bonus/MovieGallery';
import CartSummary from './components/bonus/CartSummary';
import Leaderboard from './components/bonus/Leaderboard';
import CourseCatalog from './components/bonus/CourseCatalog';
import MultiRoleDashboard from './components/bonus/MultiRoleDashboard';

const sectionStyle = { padding: 20, margin: '10px 0', borderRadius: 12, backgroundColor: '#f9f9f9' };
const sectionTitle = { fontSize: 24, fontWeight: 'bold', borderBottom: '3px solid #333', paddingBottom: 8, marginBottom: 16 };
const cardContainer = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' };

export default function App() {
  const students = [
    { name: 'Alice', age: 20, course: 'React', marks: 95 },
    { name: 'Bob', age: 22, course: 'Angular', marks: 45 },
    { name: 'Charlie', age: 19, course: 'Vue', marks: 30 },
    { name: 'Diana', age: 21, course: 'React', marks: 88 },
    { name: 'Eve', age: 23, course: 'Node.js', marks: 92 },
  ];
  const company = { name: 'TechCorp', industry: 'Information Technology', location: 'Bangalore, India', employees: 500, founded: 2010, website: 'www.techcorp.com' };
  const dashboardStudents = [
    { name: 'Amit', age: 20, course: 'React', marks: 95, attendance: 92 },
    { name: 'Priya', age: 22, course: 'Angular', marks: 45, attendance: 60 },
    { name: 'Rahul', age: 19, course: 'Vue', marks: 28, attendance: 45 },
    { name: 'Sneha', age: 21, course: 'Node.js', marks: 88, attendance: 80 },
    { name: 'Vikram', age: 23, course: 'Python', marks: 92, attendance: 75 },
  ];

  const products20 = [
    { name: 'iPhone 15', price: 79999, quantity: 10, isOnSale: true, featured: true, image: 'https://picsum.photos/id/100/250/200' },
    { name: 'Samsung S24', price: 69999, quantity: 5, isOnSale: false, featured: true, image: 'https://picsum.photos/id/101/250/200' },
    { name: 'OnePlus 12', price: 49999, quantity: 0, isOnSale: false, featured: false, image: 'https://picsum.photos/id/102/250/200' },
    { name: 'MacBook Pro', price: 149999, quantity: 3, isOnSale: true, featured: true, image: 'https://picsum.photos/id/103/250/200' },
    { name: 'Dell XPS', price: 89999, quantity: 0, isOnSale: false, featured: false, image: 'https://picsum.photos/id/104/250/200' },
    { name: 'Sony WH-1000XM5', price: 24999, quantity: 15, isOnSale: true, featured: false, image: 'https://picsum.photos/id/105/250/200' },
    { name: 'iPad Air', price: 54999, quantity: 8, isOnSale: false, featured: true, image: 'https://picsum.photos/id/106/250/200' },
    { name: 'Nintendo Switch', price: 29999, quantity: 0, isOnSale: false, featured: false, image: 'https://picsum.photos/id/107/250/200' },
    { name: 'AirPods Pro', price: 24999, quantity: 20, isOnSale: true, featured: false, image: 'https://picsum.photos/id/108/250/200' },
    { name: 'Canon EOS R5', price: 339999, quantity: 2, isOnSale: false, featured: true, image: 'https://picsum.photos/id/109/250/200' },
    { name: 'PS5', price: 49999, quantity: 0, isOnSale: false, featured: true, image: 'https://picsum.photos/id/110/250/200' },
    { name: 'Nike Air Max', price: 12999, quantity: 25, isOnSale: true, featured: false, image: 'https://picsum.photos/id/111/250/200' },
    { name: 'LG OLED TV', price: 129999, quantity: 4, isOnSale: true, featured: false, image: 'https://picsum.photos/id/112/250/200' },
    { name: 'Kindle Paperwhite', price: 14999, quantity: 12, isOnSale: false, featured: false, image: 'https://picsum.photos/id/113/250/200' },
    { name: 'GoPro Hero 12', price: 39999, quantity: 0, isOnSale: false, featured: false, image: 'https://picsum.photos/id/114/250/200' },
    { name: 'Dyson V15', price: 54999, quantity: 6, isOnSale: true, featured: true, image: 'https://picsum.photos/id/115/250/200' },
    { name: 'Bose QC Ultra', price: 29999, quantity: 9, isOnSale: false, featured: false, image: 'https://picsum.photos/id/116/250/200' },
    { name: 'Apple Watch', price: 39999, quantity: 11, isOnSale: true, featured: false, image: 'https://picsum.photos/id/117/250/200' },
    { name: 'Mi Smart TV', price: 29999, quantity: 7, isOnSale: false, featured: false, image: 'https://picsum.photos/id/118/250/200' },
    { name: 'Asus ROG Phone', price: 59999, quantity: 0, isOnSale: false, featured: true, image: 'https://picsum.photos/id/119/250/200' },
  ];

  const employees = [
    { name: 'John Smith', designation: 'Senior Engineer', department: 'Engineering', experience: 12, status: 'Active', image: 'https://picsum.photos/id/120/200/160' },
    { name: 'Sarah Wilson', designation: 'Product Manager', department: 'Product', experience: 8, status: 'Active', image: 'https://picsum.photos/id/121/200/160' },
    { name: 'Mike Johnson', designation: 'Designer', department: 'Design', experience: 3, status: 'On Leave', image: 'https://picsum.photos/id/122/200/160' },
    { name: 'Emma Davis', designation: 'QA Lead', department: 'Quality', experience: 6, status: 'Active', image: 'https://picsum.photos/id/123/200/160' },
    { name: 'Chris Lee', designation: 'DevOps Engineer', department: 'Infrastructure', experience: 5, status: 'Inactive', image: 'https://picsum.photos/id/124/200/160' },
  ];

  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, isTrending: true, isNewRelease: false, isTopRated: true, image: 'https://picsum.photos/id/130/250/350' },
    { title: 'Oppenheimer', genre: 'Drama', rating: 8.5, isTrending: true, isNewRelease: true, isTopRated: true, image: 'https://picsum.photos/id/131/250/350' },
    { title: 'Dune 2', genre: 'Sci-Fi', rating: 8.3, isTrending: true, isNewRelease: true, isTopRated: false, image: 'https://picsum.photos/id/132/250/350' },
    { title: 'The Batman', genre: 'Action', rating: 7.8, isTrending: false, isNewRelease: false, isTopRated: false, image: 'https://picsum.photos/id/133/250/350' },
    { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, isTrending: false, isNewRelease: false, isTopRated: true, image: 'https://picsum.photos/id/134/250/350' },
  ];

  const cartItems = [
    { name: 'Laptop', qty: 1, price: 49999 },
    { name: 'Mouse', qty: 2, price: 799 },
    { name: 'Keyboard', qty: 1, price: 2999 },
  ];

  const leaderboardStudents = [
    { name: 'Amit Sharma', course: 'React', marks: 97 },
    { name: 'Priya Patel', course: 'Angular', marks: 94 },
    { name: 'Rahul Kumar', course: 'Vue', marks: 91 },
    { name: 'Sneha Gupta', course: 'Node.js', marks: 88 },
    { name: 'Vikram Singh', course: 'Python', marks: 85 },
    { name: 'Anita Desai', course: 'React', marks: 82 },
  ];

  const catalogCourses = [
    { name: 'React Masterclass', instructor: 'John Smith', duration: '8 weeks', price: 4999, seatsLeft: 15, isNew: true, isPopular: true, image: 'https://picsum.photos/id/140/280/160' },
    { name: 'Python for Data Science', instructor: 'Jane Doe', duration: '6 weeks', price: 3999, seatsLeft: 3, isNew: false, isPopular: true, image: 'https://picsum.photos/id/141/280/160' },
    { name: 'Full Stack Web Dev', instructor: 'Mike Wilson', duration: '12 weeks', price: 9999, seatsLeft: 2, isNew: true, isPopular: false, image: 'https://picsum.photos/id/142/280/160' },
    { name: 'UI/UX Design', instructor: 'Sarah Lee', duration: '4 weeks', price: 2999, seatsLeft: 20, isNew: false, isPopular: false, image: 'https://picsum.photos/id/143/280/160' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', fontSize: 32 }}>Props & Conditional Rendering - Complete Tasks (1-70)</h1>

      {/* ===== SECTION: Props Tasks (1-10) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Props Tasks (1-10)</h2>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 1: Student Component</h4>
          <div style={cardContainer}>
            <Student name="John Doe" age={20} course="Computer Science" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 2: EmployeeCard Component</h4>
          <div style={cardContainer}>
            <EmployeeCard name="Sarah Wilson" designation="Software Engineer" salary={85000} department="Engineering" />
            <EmployeeCard name="Mike Johnson" designation="Product Manager" salary={95000} department="Product" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 3: ProductCard - 5 Different Products</h4>
          <div style={cardContainer}>
            <ProductCard name="iPhone 15" price={999} description="Latest Apple smartphone with A17 chip." />
            <ProductCard name="Samsung TV" price={799} description="55-inch 4K OLED smart TV." />
            <ProductCard name="Nike Shoes" price={129} description="Lightweight running shoes." />
            <ProductCard name="MacBook Pro" price={1999} description="Powerful laptop for professionals." />
            <ProductCard name="Sony Headphones" price={349} description="Noise-cancelling wireless headphones." />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 4: MovieCard Component</h4>
          <div style={cardContainer}>
            <MovieCard title="Inception" poster="https://picsum.photos/id/1/300/400" rating={8.8} genre="Sci-Fi" />
            <MovieCard title="The Dark Knight" poster="https://picsum.photos/id/2/300/400" rating={9.0} genre="Action" />
            <MovieCard title="Interstellar" poster="https://picsum.photos/id/3/300/400" rating={8.6} genre="Sci-Fi" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 5: BookCard Component</h4>
          <div style={cardContainer}>
            <BookCard title="Atomic Habits" author="James Clear" price={450} category="Self-Help" />
            <BookCard title="Clean Code" author="Robert C. Martin" price={599} category="Programming" />
            <BookCard title="The Alchemist" author="Paulo Coelho" price={350} category="Fiction" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 6: CourseCard Component</h4>
          <div style={cardContainer}>
            <CourseCard courseName="React Masterclass" trainer="John Smith" duration="8 weeks" fee={4999} />
            <CourseCard courseName="Python for Data Science" trainer="Jane Doe" duration="6 weeks" fee={3999} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 7: ProfileCard Component</h4>
          <div style={cardContainer}>
            <ProfileCardProps image="https://picsum.photos/id/10/200/200" name="Emma Stone" role="Frontend Developer" location="New York" />
            <ProfileCardProps image="https://picsum.photos/id/11/200/200" name="James Bond" role="Backend Developer" location="London" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 8: StudentList with Array Props</h4>
          <StudentList students={students} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 9: CompanyCard with Object Prop</h4>
          <div style={cardContainer}>
            <CompanyCard company={company} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 10: Button Component with Props</h4>
          <div style={cardContainer}>
            <Button text="Submit" onClick={() => alert('Submitted!')} />
            <Button text="Cancel" onClick={() => alert('Cancelled!')} color="#dc3545" />
            <Button text="Save Draft" onClick={() => alert('Draft saved!')} color="#28a745" />
          </div>
        </div>
      </div>

      {/* ===== SECTION: Conditional Rendering (11-20) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Conditional Rendering Tasks (11-20)</h2>
        <div style={cardContainer}>
          <div><h4>Task 11</h4><LoginStatus isLoggedIn={true} /><LoginStatus isLoggedIn={false} /></div>
          <div><h4>Task 12</h4><StockStatus productName="Laptop" inStock={true} /><StockStatus productName="Console" inStock={false} /></div>
          <div><h4>Task 13</h4><PassFail studentName="Alice" marks={85} /><PassFail studentName="Bob" marks={25} /></div>
          <div><h4>Task 14</h4><AgeStatus name="Tom" age={22} /><AgeStatus name="Sara" age={15} /></div>
          <div><h4>Task 15</h4><PremiumBadge userName="Alice" isPremium={true} /><PremiumBadge userName="Bob" isPremium={false} /></div>
          <div><h4>Task 16</h4><DiscountLabel productName="Laptop" price={60000} discountPercent={15} /><DiscountLabel productName="Mouse" price={500} discountPercent={0} /></div>
          <div><h4>Task 17</h4><OnlineOffline userName="Alice" isActive={true} /><OnlineOffline userName="Bob" isActive={false} /></div>
          <div><h4>Task 18</h4><RoleDashboard userName="Admin User" role="Admin" /><RoleDashboard userName="Regular User" role="User" /></div>
          <div><h4>Task 19</h4><Greeting /></div>
          <div><h4>Task 20</h4><ProfileImage userName="Alice" hasCustomImage={true} customImageUrl="https://picsum.photos/id/12/200/200" /><ProfileImage userName="Bob" hasCustomImage={false} customImageUrl="" /></div>
        </div>
      </div>

      {/* ===== SECTION: Combined (21-30) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Combined Props + Conditional Rendering (21-30)</h2>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 21: StudentCard with Topper Badge</h4>
          <div style={cardContainer}>
            <StudentCard name="Alice" age={20} course="React" marks={95} />
            <StudentCard name="Bob" age={22} course="Angular" marks={72} />
            <StudentCard name="Charlie" age={19} course="Vue" marks={45} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 22: EmployeeCard with Senior Badge</h4>
          <div style={cardContainer}>
            <EmployeeCardCombined name="John" designation="Lead Engineer" salary={120000} department="Engineering" experience={8} />
            <EmployeeCardCombined name="Jane" designation="Junior Dev" salary={60000} department="Engineering" experience={2} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 23: MovieCard with Blockbuster Badge</h4>
          <div style={cardContainer}>
            <MovieCardCombined title="Inception" poster="https://picsum.photos/id/1/300/400" rating={8.8} genre="Sci-Fi" />
            <MovieCardCombined title="Avg Movie" poster="https://picsum.photos/id/4/300/400" rating={6.2} genre="Drama" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 24: ProductCard with Sale Badge</h4>
          <div style={cardContainer}>
            <ProductCardCombined name="Smartphone" price={25000} description="Latest model" isOnSale={true} salePrice={19999} />
            <ProductCardCombined name="Tablet" price={30000} description="High performance" isOnSale={false} salePrice={null} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 25: CourseCard with Enrollment Status</h4>
          <div style={cardContainer}>
            <CourseCardCombined courseName="React Advanced" trainer="John" duration="4 weeks" fee={5999} totalSeats={30} enrolledSeats={20} />
            <CourseCardCombined courseName="ML Basics" trainer="Jane" duration="6 weeks" fee={4999} totalSeats={25} enrolledSeats={25} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 26: RestaurantCard Open/Closed</h4>
          <div style={cardContainer}>
            <RestaurantCard name="Pizza Palace" cuisine="Italian" rating={4.5} openHour={9} closeHour={22} />
            <RestaurantCard name="Night Diner" cuisine="American" rating={4.0} openHour={20} closeHour={2} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 27: WeatherCard with Icons</h4>
          <div style={cardContainer}>
            <WeatherCard city="Mumbai" temperature={32} condition="Sunny" />
            <WeatherCard city="London" temperature={15} condition="Rainy" />
            <WeatherCard city="Tokyo" temperature={20} condition="Cloudy" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 28: ProfileCard Verified</h4>
          <div style={cardContainer}>
            <ProfileCard name="Alice Johnson" role="Senior Developer" location="San Francisco" isVerified={true} />
            <ProfileCard name="Bob Smith" role="Designer" location="Chicago" isVerified={false} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 29: JobCard Remote/On-site</h4>
          <div style={cardContainer}>
            <JobCard title="React Developer" company="TechCorp" salary={95000} jobType="Remote" location="Anywhere" />
            <JobCard title="Office Manager" company="LocalBiz" salary={55000} jobType="On-site" location="New York" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 30: Student Management Dashboard</h4>
          <StudentDashboard students={dashboardStudents} />
        </div>
      </div>

      {/* ===== SECTION: Advanced Basics (31-50) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Advanced Basics Tasks (31-50)</h2>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 31: LaptopCard - Gaming Laptop Badge</h4>
          <div style={cardContainer}>
            <LaptopCard brand="ASUS" model="ROG Strix" ram={16} processor="i9-13900H" price={149999} image="https://picsum.photos/id/150/280/180" />
            <LaptopCard brand="HP" model="Pavilion" ram={8} processor="i5-1235U" price={54999} image="https://picsum.photos/id/151/280/180" />
            <LaptopCard brand="Lenovo" model="Legion" ram={32} processor="Ryzen 9" price={179999} image="https://picsum.photos/id/152/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 32: MobileCard - 5G Support</h4>
          <div style={cardContainer}>
            <MobileCard brand="Samsung" model="Galaxy S24 Ultra" storage={256} price={134999} is5G={true} image="https://picsum.photos/id/160/280/180" />
            <MobileCard brand="Apple" model="iPhone 14" storage={128} price={69999} is5G={false} image="https://picsum.photos/id/161/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 33: CarCard - Electric Vehicle</h4>
          <div style={cardContainer}>
            <CarCard brand="Tesla" model="Model 3" fuelType="Electric" price={4500000} seats={5} image="https://picsum.photos/id/170/280/180" />
            <CarCard brand="Maruti" model="Swift" fuelType="Petrol" price={900000} seats={5} image="https://picsum.photos/id/171/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 34: FlightCard - Seats Available / Fully Booked</h4>
          <div style={cardContainer}>
            <FlightCard airline="IndiGo" from="Mumbai" to="Delhi" time="10:30 AM" seatsAvailable={45} price={5500} image="https://picsum.photos/id/180/280/160" />
            <FlightCard airline="Air India" from="Bangalore" to="Chennai" time="2:15 PM" seatsAvailable={0} price={4200} image="https://picsum.photos/id/181/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 35: HotelCard - Free Breakfast</h4>
          <div style={cardContainer}>
            <HotelCard name="Taj Palace" location="Mumbai" pricePerNight={12000} rating={4.8} breakfastIncluded={true} image="https://picsum.photos/id/190/280/180" />
            <HotelCard name="Budget Inn" location="Delhi" pricePerNight={2000} rating={3.5} breakfastIncluded={false} image="https://picsum.photos/id/191/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 36: DoctorCard - Availability</h4>
          <div style={cardContainer}>
            <DoctorCard name="Priya Mehta" specialty="Cardiologist" experience={15} consultationFee={1500} availableToday={true} image="https://picsum.photos/id/200/280/180" />
            <DoctorCard name="Raj Sharma" specialty="Neurologist" experience={20} consultationFee={2000} availableToday={false} image="https://picsum.photos/id/201/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 37: MedicineCard - Prescription Required</h4>
          <div style={cardContainer}>
            <MedicineCard name="Amoxicillin" manufacturer="Cipla" price={120} dosage="500mg" requiresPrescription={true} image="https://picsum.photos/id/210/280/180" />
            <MedicineCard name="Paracetamol" manufacturer="Sun Pharma" price={30} dosage="650mg" requiresPrescription={false} image="https://picsum.photos/id/211/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 38: FoodCard - Veg / Non-Veg</h4>
          <div style={cardContainer}>
            <FoodCard name="Paneer Tikka" cuisine="Indian" price={280} isVeg={true} image="https://picsum.photos/id/220/280/180" />
            <FoodCard name="Butter Chicken" cuisine="Indian" price={350} isVeg={false} image="https://picsum.photos/id/221/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 39: MovieCard - 18+ Adult Rating</h4>
          <div style={cardContainer}>
            <MovieCard18 title="Deadpool 3" genre="Action" rating={8.5} duration={128} isAdult={true} image="https://picsum.photos/id/230/280/220" />
            <MovieCard18 title="Finding Nemo" genre="Animation" rating={8.2} duration={100} isAdult={false} image="https://picsum.photos/id/231/280/220" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 40: CourseCard - Best Seller</h4>
          <div style={cardContainer}>
            <CourseCardBest name="React Masterclass" instructor="John Smith" price={4999} duration="8 weeks" enrollments={5200} image="https://picsum.photos/id/240/280/180" />
            <CourseCardBest name="Rust Basics" instructor="Jane Doe" price={2999} duration="4 weeks" enrollments={150} image="https://picsum.photos/id/241/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 41: BookCard - Out of Stock</h4>
          <div style={cardContainer}>
            <BookCardStock title="Atomic Habits" author="James Clear" price={450} category="Self-Help" quantity={15} image="https://picsum.photos/id/250/280/220" />
            <BookCardStock title="1984" author="George Orwell" price={300} category="Fiction" quantity={0} image="https://picsum.photos/id/251/280/220" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 42: CustomerCard - Membership Tiers</h4>
          <div style={cardContainer}>
            <CustomerCard name="Alice" email="alice@email.com" points={8000} image="https://picsum.photos/id/260/280/160" />
            <CustomerCard name="Bob" email="bob@email.com" points={3500} image="https://picsum.photos/id/261/280/160" />
            <CustomerCard name="Charlie" email="charlie@email.com" points={500} image="https://picsum.photos/id/262/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 43: PlayerCard - Captain Badge</h4>
          <div style={cardContainer}>
            <PlayerCard name="Virat Kohli" sport="Cricket" team="RCB" jerseyNumber={18} isCaptain={true} image="https://picsum.photos/id/270/280/180" />
            <PlayerCard name="Rohit Sharma" sport="Cricket" team="MI" jerseyNumber={45} isCaptain={false} image="https://picsum.photos/id/271/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 44: TeacherCard - HOD Badge</h4>
          <div style={cardContainer}>
            <TeacherCard name="Dr. Sharma" subject="Computer Science" experience={20} qualification="PhD" designation="Head of Department" image="https://picsum.photos/id/280/280/180" />
            <TeacherCard name="Mrs. Patel" subject="Mathematics" experience={10} qualification="MSc" designation="Professor" image="https://picsum.photos/id/281/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 45: BankAccountCard - Minimum Balance Warning</h4>
          <div style={cardContainer}>
            <BankAccountCard holderName="Rahul Kumar" accountNumber="1234567890" bankName="SBI" balance={50000} image="https://picsum.photos/id/290/280/120" />
            <BankAccountCard holderName="Priya Singh" accountNumber="9876543210" bankName="HDFC" balance={500} image="https://picsum.photos/id/291/280/120" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 46: BusTicketCard - Status Variants</h4>
          <div style={cardContainer}>
            <BusTicketCard passenger="Amit" from="Mumbai" to="Pune" date="2026-07-20" seatNumber="A12" status="Confirmed" image="https://picsum.photos/id/300/280/140" />
            <BusTicketCard passenger="Sneha" from="Delhi" to="Jaipur" date="2026-07-22" seatNumber="B05" status="Waiting List" image="https://picsum.photos/id/301/280/140" />
            <BusTicketCard passenger="Ravi" from="Chennai" to="Bangalore" date="2026-07-18" seatNumber="C08" status="Cancelled" image="https://picsum.photos/id/302/280/140" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 47: OrderCard - Status Colors</h4>
          <div style={cardContainer}>
            <OrderCard orderId="ORD001" product="Laptop" customer="Alice" price={75000} status="Pending" image="https://picsum.photos/id/310/280/160" />
            <OrderCard orderId="ORD002" product="Phone" customer="Bob" price={45000} status="Shipped" image="https://picsum.photos/id/311/280/160" />
            <OrderCard orderId="ORD003" product="Headphones" customer="Charlie" price={5000} status="Delivered" image="https://picsum.photos/id/312/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 48: EmployeeCard - Promotion Eligible</h4>
          <div style={cardContainer}>
            <EmployeeCardPromo name="John Smith" designation="Senior Engineer" department="Engineering" experience={12} salary={150000} image="https://picsum.photos/id/320/280/160" />
            <EmployeeCardPromo name="Jane Doe" designation="Junior Dev" department="Engineering" experience={3} salary={60000} image="https://picsum.photos/id/321/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 49: JobCard - Actively Hiring</h4>
          <div style={cardContainer}>
            <JobCardHiring title="React Developer" company="TechCorp" location="Bangalore" salary={120000} vacancies={5} jobType="Remote" image="https://picsum.photos/id/330/280/140" />
            <JobCardHiring title="Data Analyst" company="DataInc" location="Mumbai" salary={90000} vacancies={0} jobType="On-site" image="https://picsum.photos/id/331/280/140" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 50: QuizCard - Completed / Not Attempted</h4>
          <div style={cardContainer}>
            <QuizCard title="React Quiz" subject="Web Dev" totalQuestions={20} timeLimit={30} isCompleted={true} image="https://picsum.photos/id/340/280/160" />
            <QuizCard title="Python Quiz" subject="Programming" totalQuestions={15} timeLimit={25} isCompleted={false} image="https://picsum.photos/id/341/280/160" />
          </div>
        </div>
      </div>

      {/* ===== SECTION: Advanced Basics (51-60) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Advanced Basics Tasks (51-60)</h2>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 51: TaskCard - Priority Badges</h4>
          <div style={cardContainer}>
            <TaskCard title="Fix Login Bug" assignee="Alice" deadline="2026-07-18" priority="High" image="https://picsum.photos/id/350/280/140" />
            <TaskCard title="Update Docs" assignee="Bob" deadline="2026-07-25" priority="Medium" image="https://picsum.photos/id/351/280/140" />
            <TaskCard title="Code Review" assignee="Charlie" deadline="2026-08-01" priority="Low" image="https://picsum.photos/id/352/280/140" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 52: NotificationCard - Success / Warning / Error</h4>
          <div style={cardContainer}>
            <NotificationCard title="Success" message="Your profile has been updated successfully!" type="Success" time="2 min ago" />
            <NotificationCard title="Warning" message="Your subscription expires in 3 days." type="Warning" time="1 hour ago" />
            <NotificationCard title="Error" message="Payment failed. Please try again." type="Error" time="Just now" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 53: WeatherCard - Temperature-based Background</h4>
          <div style={cardContainer}>
            <WeatherCardAdv city="Chennai" temperature={42} condition="Sunny" humidity={65} windSpeed={12} image="https://picsum.photos/id/360/280/160" />
            <WeatherCardAdv city="Mumbai" temperature={28} condition="Partly Cloudy" humidity={75} windSpeed={8} image="https://picsum.photos/id/361/280/160" />
            <WeatherCardAdv city="Manali" temperature={5} condition="Snowy" humidity={40} windSpeed={20} image="https://picsum.photos/id/362/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 54: PaymentCard - Paid / Pending</h4>
          <div style={cardContainer}>
            <PaymentCard orderId="PAY001" amount={75000} method="Credit Card" date="2026-07-15" isPaid={true} image="https://picsum.photos/id/370/280/120" />
            <PaymentCard orderId="PAY002" amount={45000} method="UPI" date="2026-07-16" isPaid={false} image="https://picsum.photos/id/371/280/120" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 55: StudentCard - Scholarship Badge</h4>
          <div style={cardContainer}>
            <StudentCardScholarship name="Amit" course="Engineering" marks={97} attendance={95} image="https://picsum.photos/id/380/280/160" />
            <StudentCardScholarship name="Priya" course="Medical" marks={88} attendance={90} image="https://picsum.photos/id/381/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 56: ProductCard - Free Delivery</h4>
          <div style={cardContainer}>
            <ProductCardDelivery name="Laptop" price={75000} seller="TechStore" category="Electronics" orderValue={75000} image="https://picsum.photos/id/390/280/180" />
            <ProductCardDelivery name="USB Cable" price={199} seller="GadgetHub" category="Accessories" orderValue={199} image="https://picsum.photos/id/391/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 57: RestaurantCard - Home Delivery</h4>
          <div style={cardContainer}>
            <RestaurantCardDelivery name="Pizza Hut" cuisine="Italian" rating={4.2} deliveryTime={30} homeDelivery={true} image="https://picsum.photos/id/400/280/180" />
            <RestaurantCardDelivery name="Fine Dining" cuisine="French" rating={4.8} deliveryTime={0} homeDelivery={false} image="https://picsum.photos/id/401/280/180" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 58: GymMemberCard - Membership Expired</h4>
          <div style={cardContainer}>
            <GymMemberCard name="Rahul" membership="Premium" expiryDate="2026-12-31" image="https://picsum.photos/id/410/280/160" />
            <GymMemberCard name="Sneha" membership="Basic" expiryDate="2026-03-15" image="https://picsum.photos/id/411/280/160" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 59: SubscriptionCard - Active / Expired / Renew Soon</h4>
          <div style={cardContainer}>
            <SubscriptionCard planName="Netflix Premium" price={649} startDate="2026-06-01" endDate="2026-12-01" image="https://picsum.photos/id/420/280/140" />
            <SubscriptionCard planName="Spotify Free" price={0} startDate="2025-01-01" endDate="2025-06-01" image="https://picsum.photos/id/421/280/140" />
            <SubscriptionCard planName="YouTube Premium" price={129} startDate="2026-07-10" endDate="2026-07-18" image="https://picsum.photos/id/422/280/140" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 60: Combined Dashboard</h4>
          <Dashboard />
        </div>
      </div>

      {/* ===== SECTION: Bonus (61-70) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Bonus Challenge Tasks (61-70)</h2>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 61: Product Grid - 20 Products with Badges</h4>
          <ProductGrid products={products20} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 62: StatusBadge Component</h4>
          <div style={cardContainer}>
            <StatusBadge label="User Status" status="Active" />
            <StatusBadge label="Order Status" status="Pending" />
            <StatusBadge label="Payment" status="Success" />
            <StatusBadge label="Server" status="Error" />
            <StatusBadge label="Connection" status="Online" />
            <StatusBadge label="Review" status="Review" />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 63: AlertBox Component</h4>
          <AlertBox type="Success" title="Well Done!" message="Your changes have been saved successfully." />
          <AlertBox type="Error" title="Oops!" message="Something went wrong. Please try again." />
          <AlertBox type="Warning" title="Caution" message="Your session will expire in 5 minutes." />
          <AlertBox type="Info" title="Note" message="System maintenance scheduled for tonight." />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 64: Reusable Button Component</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <ReusableButton label="Small Primary" color="#007bff" size="small" onClick={() => alert('Small Primary')} />
            <ReusableButton label="Medium Success" color="#28a745" size="medium" onClick={() => alert('Medium Success')} />
            <ReusableButton label="Large Danger" color="#dc3545" size="large" onClick={() => alert('Large Danger')} />
            <ReusableButton label="Small Warning" color="#ffc107" size="small" onClick={() => alert('Small Warning')} />
            <ReusableButton label="Medium Info" color="#17a2b8" size="medium" onClick={() => alert('Medium Info')} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 65: Employee Directory</h4>
          <EmployeeDirectory employees={employees} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 66: Movie Gallery</h4>
          <MovieGallery movies={movies} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 67: Shopping Cart Summary</h4>
          <div style={cardContainer}>
            <CartSummary items={cartItems} cartTotal={54596} />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 68: Leaderboard</h4>
          <Leaderboard students={leaderboardStudents} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 69: Course Catalog</h4>
          <CourseCatalog courses={catalogCourses} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4>Task 70: Multi-Role Dashboard</h4>
          <div style={cardContainer}>
            <MultiRoleDashboard userRole="Student" userName="Amit Kumar" />
            <MultiRoleDashboard userRole="Faculty" userName="Dr. Sharma" />
            <MultiRoleDashboard userRole="Admin" userName="Rajesh Gupta" />
            <MultiRoleDashboard userRole="Trainer" userName="Mike Wilson" />
          </div>
        </div>
      </div>
    </div>
  );
}
