// pages/about.js
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <div className="layout-container">
        <div className="left-side">
          <img
            src="/images/parth.jpg" // Replace with your image path
            alt="Profile Picture"
            className="profile-image"
          />
        </div>
        <div className="right-side">
          <h1 className="main-heading">My name is Parth.</h1>
          <p className="sub-heading">
            Hi, I’m Parth, a passionate designer in the process of learning and refining my craft. With a strong interest in UI/UX, graphic design, and branding, I am continuously expanding my knowledge through self-study. My goal is to create impactful and meaningful designs that resonate with users and clients alike.
          </p>
        </div>
      </div>

      <div className="layout-container">
        <div className="left-side">
          <img
            src="/images/Dipak.jpg" // Replace with your image path
            alt="Profile Picture"
            className="profile-image"
          />
        </div>
        <div className="right-side">
          <h1 className="main-heading">My name is Dipak.</h1>
          <p className="sub-heading">
            I’m always eager to connect with other designers and professionals in the field. If you have a project in mind or would like to collaborate, feel free to reach out! You can find me on LinkedIn, Behance, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
