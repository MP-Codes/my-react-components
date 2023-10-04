import NavBar from "./components/NavBar";
import imagePath from "./assets/9111226_code_icon.png";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  let items = ["Home","Product", "Service"];
  return (
    <div>
      <NavBar 
      brandName="My Brand" 
      imageSrcPath={imagePath} 
      navItems={items}
      themeColor="dark"/>
    </div>
  );
}
export default App;