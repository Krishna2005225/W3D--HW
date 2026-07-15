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

const sectionStyle = {
  padding: '20px',
  margin: '10px 0',
  borderRadius: 12,
  backgroundColor: '#f9f9f9',
};

const sectionTitle = {
  fontSize: 24,
  fontWeight: 'bold',
  borderBottom: '3px solid #333',
  paddingBottom: 8,
  marginBottom: 16,
};

const cardContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export default function App() {
  const students = [
    { name: 'Alice', age: 20, course: 'React', marks: 95 },
    { name: 'Bob', age: 22, course: 'Angular', marks: 45 },
    { name: 'Charlie', age: 19, course: 'Vue', marks: 30 },
    { name: 'Diana', age: 21, course: 'React', marks: 88 },
    { name: 'Eve', age: 23, course: 'Node.js', marks: 92 },
  ];

  const company = {
    name: 'TechCorp',
    industry: 'Information Technology',
    location: 'Bangalore, India',
    employees: 500,
    founded: 2010,
    website: 'www.techcorp.com',
  };

  const dashboardStudents = [
    { name: 'Amit', age: 20, course: 'React', marks: 95, attendance: 92 },
    { name: 'Priya', age: 22, course: 'Angular', marks: 45, attendance: 60 },
    { name: 'Rahul', age: 19, course: 'Vue', marks: 28, attendance: 45 },
    { name: 'Sneha', age: 21, course: 'Node.js', marks: 88, attendance: 80 },
    { name: 'Vikram', age: 23, course: 'Python', marks: 92, attendance: 75 },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', fontSize: 32 }}>Props & Conditional Rendering - React Tasks</h1>

      {/* ===== SECTION: Props Tasks (1-10) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Props Tasks (1-10)</h2>

        {/* Task 1 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 1: Student Component</h4>
          <div style={cardContainer}>
            <Student name="John Doe" age={20} course="Computer Science" />
          </div>
        </div>

        {/* Task 2 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 2: EmployeeCard Component</h4>
          <div style={cardContainer}>
            <EmployeeCard name="Sarah Wilson" designation="Software Engineer" salary={85000} department="Engineering" />
            <EmployeeCard name="Mike Johnson" designation="Product Manager" salary={95000} department="Product" />
          </div>
        </div>

        {/* Task 3 */}
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

        {/* Task 4 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 4: MovieCard Component</h4>
          <div style={cardContainer}>
            <MovieCard title="Inception" poster="https://picsum.photos/id/1/300/400" rating={8.8} genre="Sci-Fi" />
            <MovieCard title="The Dark Knight" poster="https://picsum.photos/id/2/300/400" rating={9.0} genre="Action" />
            <MovieCard title="Interstellar" poster="https://picsum.photos/id/3/300/400" rating={8.6} genre="Sci-Fi" />
          </div>
        </div>

        {/* Task 5 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 5: BookCard Component</h4>
          <div style={cardContainer}>
            <BookCard title="Atomic Habits" author="James Clear" price={450} category="Self-Help" />
            <BookCard title="Clean Code" author="Robert C. Martin" price={599} category="Programming" />
            <BookCard title="The Alchemist" author="Paulo Coelho" price={350} category="Fiction" />
          </div>
        </div>

        {/* Task 6 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 6: CourseCard Component</h4>
          <div style={cardContainer}>
            <CourseCard courseName="React Masterclass" trainer="John Smith" duration="8 weeks" fee={4999} />
            <CourseCard courseName="Python for Data Science" trainer="Jane Doe" duration="6 weeks" fee={3999} />
          </div>
        </div>

        {/* Task 7 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 7: ProfileCard Component</h4>
          <div style={cardContainer}>
            <ProfileCardProps image="https://picsum.photos/id/10/200/200" name="Emma Stone" role="Frontend Developer" location="New York" />
            <ProfileCardProps image="https://picsum.photos/id/11/200/200" name="James Bond" role="Backend Developer" location="London" />
          </div>
        </div>

        {/* Task 8 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 8: StudentList with Array Props</h4>
          <StudentList students={students} />
        </div>

        {/* Task 9 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 9: CompanyCard with Object Prop</h4>
          <div style={cardContainer}>
            <CompanyCard company={company} />
          </div>
        </div>

        {/* Task 10 */}
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
          {/* Task 11 */}
          <div>
            <h4>Task 11: Login Status</h4>
            <LoginStatus isLoggedIn={true} />
            <LoginStatus isLoggedIn={false} />
          </div>

          {/* Task 12 */}
          <div>
            <h4>Task 12: Stock Status</h4>
            <StockStatus productName="Laptop" inStock={true} />
            <StockStatus productName="Gaming Console" inStock={false} />
          </div>

          {/* Task 13 */}
          <div>
            <h4>Task 13: Pass/Fail</h4>
            <PassFail studentName="Alice" marks={85} />
            <PassFail studentName="Bob" marks={25} />
          </div>

          {/* Task 14 */}
          <div>
            <h4>Task 14: Age Status</h4>
            <AgeStatus name="Tom" age={22} />
            <AgeStatus name="Sara" age={15} />
          </div>

          {/* Task 15 */}
          <div>
            <h4>Task 15: Premium Badge</h4>
            <PremiumBadge userName="Alice" isPremium={true} />
            <PremiumBadge userName="Bob" isPremium={false} />
          </div>

          {/* Task 16 */}
          <div>
            <h4>Task 16: Discount Label</h4>
            <DiscountLabel productName="Laptop" price={60000} discountPercent={15} />
            <DiscountLabel productName="Mouse" price={500} discountPercent={0} />
          </div>

          {/* Task 17 */}
          <div>
            <h4>Task 17: Online/Offline</h4>
            <OnlineOffline userName="Alice" isActive={true} />
            <OnlineOffline userName="Bob" isActive={false} />
          </div>

          {/* Task 18 */}
          <div>
            <h4>Task 18: Role Dashboard</h4>
            <RoleDashboard userName="Admin User" role="Admin" />
            <RoleDashboard userName="Regular User" role="User" />
          </div>

          {/* Task 19 */}
          <div>
            <h4>Task 19: Time-based Greeting</h4>
            <Greeting />
          </div>

          {/* Task 20 */}
          <div>
            <h4>Task 20: Profile Image</h4>
            <ProfileImage userName="Alice" hasCustomImage={true} customImageUrl="https://picsum.photos/id/12/200/200" />
            <ProfileImage userName="Bob" hasCustomImage={false} customImageUrl="" />
          </div>
        </div>
      </div>

      {/* ===== SECTION: Combined Props + Conditional Rendering (21-30) ===== */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Combined Props + Conditional Rendering Tasks (21-30)</h2>

        {/* Task 21 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 21: StudentCard with Topper Badge</h4>
          <div style={cardContainer}>
            <StudentCard name="Alice" age={20} course="React" marks={95} />
            <StudentCard name="Bob" age={22} course="Angular" marks={72} />
            <StudentCard name="Charlie" age={19} course="Vue" marks={45} />
          </div>
        </div>

        {/* Task 22 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 22: EmployeeCard with Senior Badge</h4>
          <div style={cardContainer}>
            <EmployeeCardCombined name="John" designation="Lead Engineer" salary={120000} department="Engineering" experience={8} />
            <EmployeeCardCombined name="Jane" designation="Junior Dev" salary={60000} department="Engineering" experience={2} />
          </div>
        </div>

        {/* Task 23 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 23: MovieCard with Blockbuster Badge</h4>
          <div style={cardContainer}>
            <MovieCardCombined title="Inception" poster="https://picsum.photos/id/1/300/400" rating={8.8} genre="Sci-Fi" />
            <MovieCardCombined title="Avg Movie" poster="https://picsum.photos/id/4/300/400" rating={6.2} genre="Drama" />
          </div>
        </div>

        {/* Task 24 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 24: ProductCard with Sale Badge</h4>
          <div style={cardContainer}>
            <ProductCardCombined name="Smartphone" price={25000} description="Latest model" isOnSale={true} salePrice={19999} />
            <ProductCardCombined name="Tablet" price={30000} description="High performance" isOnSale={false} salePrice={null} />
          </div>
        </div>

        {/* Task 25 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 25: CourseCard with Enrollment Status</h4>
          <div style={cardContainer}>
            <CourseCardCombined courseName="React Advanced" trainer="John" duration="4 weeks" fee={5999} totalSeats={30} enrolledSeats={20} />
            <CourseCardCombined courseName="ML Basics" trainer="Jane" duration="6 weeks" fee={4999} totalSeats={25} enrolledSeats={25} />
          </div>
        </div>

        {/* Task 26 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 26: RestaurantCard with Open/Closed Status</h4>
          <div style={cardContainer}>
            <RestaurantCard name="Pizza Palace" cuisine="Italian" rating={4.5} openHour={9} closeHour={22} />
            <RestaurantCard name="Night Diner" cuisine="American" rating={4.0} openHour={20} closeHour={2} />
          </div>
        </div>

        {/* Task 27 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 27: WeatherCard with Icons</h4>
          <div style={cardContainer}>
            <WeatherCard city="Mumbai" temperature={32} condition="Sunny" />
            <WeatherCard city="London" temperature={15} condition="Rainy" />
            <WeatherCard city="Tokyo" temperature={20} condition="Cloudy" />
          </div>
        </div>

        {/* Task 28 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 28: ProfileCard with Verified Badge</h4>
          <div style={cardContainer}>
            <ProfileCard name="Alice Johnson" role="Senior Developer" location="San Francisco" isVerified={true} />
            <ProfileCard name="Bob Smith" role="Designer" location="Chicago" isVerified={false} />
          </div>
        </div>

        {/* Task 29 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 29: JobCard with Remote/On-site Badge</h4>
          <div style={cardContainer}>
            <JobCard title="React Developer" company="TechCorp" salary={95000} jobType="Remote" location="Anywhere" />
            <JobCard title="Office Manager" company="LocalBiz" salary={55000} jobType="On-site" location="New York" />
          </div>
        </div>

        {/* Task 30 */}
        <div style={{ marginBottom: 20 }}>
          <h4>Task 30: Student Management Dashboard</h4>
          <StudentDashboard students={dashboardStudents} />
        </div>
      </div>
    </div>
  );
}
