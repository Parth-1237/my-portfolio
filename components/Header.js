// components/Header.js
function Header({ title, subtitle }) {
    return (
      <header className="text-center py-0">
        <h1 className="text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
      </header>
    );
  }
  
  export default Header; // Add this line if it's missing
  