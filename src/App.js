// import Test from "./pages/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Salary from "./pages/Salary";
import Policies from "./pages/Policies";
import Resignation from "./pages/Resignation";
import Header from "./custom_components/Header";
import Footer from "./custom_components/Footer";
import MyProfileDetails from "./pages/MyProfileDetails";
import MyProfileDetailsEdit from "./pages/MyProfileDetailsEdit";
import UploadedDocuments from "./pages/UploadedDocuments";
import EmployeeGrievancePolicy from "./pages/EmployeeGrievancePolicy";
import ResignationForm from "./pages/ResignationForm";
import ResignationPage from "./pages/ResignationPage";
import Documents from "./pages/Documents";
import Test from "./pages/Test";
import FinancialDetails from "./custom_components/FinancialDetails";
import FirstTimeLoginPage from "./pages/FirstTimeLoginPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <GlobalStyle />
        <header>
          <Header />
        </header>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/my-profile-details" element={<MyProfileDetails />} />
            <Route path="/test" element={<Test />} />
            <Route path="/resignation-page" element={<ResignationPage />} />
            <Route
              path="/my-profile-details/my-profile-details-edit"
              element={<MyProfileDetailsEdit />}
            />
            <Route path="/uploaded-documents" element={<UploadedDocuments />} />
            <Route
              path="/employee-grievance-policy"
              element={<EmployeeGrievancePolicy />}
            />
            <Route path="/resignation" element={<Resignation />} />
            <Route
              path="/resignation/resignation-form"
              element={<ResignationForm />}
            />
            <Route path="/financial-details" element={<FirstTimeLoginPage />} />
          </Routes>

          <div className="bottom-0 w-full">
            {" "}
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
