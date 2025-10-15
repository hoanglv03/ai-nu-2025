import "./styles.css";

export default function Page() {
  return (
    <>
      {/* Envelope Section */}
      <div className="envelope-container">
        <div className="envelope">
          <div className="envelope__tab"></div>
          <div className="envelope__letter">
            <p>
              Giữa thế giới bao la, anh chỉ cần em. 💫 Em là ánh sáng dẫn lối
              trái tim anh, là niềm vui trong từng hơi thở của anh. 💖
            </p>
          </div>
          <div className="envelope--base"></div>
        </div>
      </div>

      {/* Sun Section */}
      <div className="sun-container">
        <img src="/sun.png" alt="Sun" className="sun-image" />
      </div>

      {/* Road Section */}
      <div className="road-container">
        <div className="road"></div>
      </div>

      {/* Ice Cream Truck Section */}
      <div className="truck-container">
        <div className="container">
          <div className="ice-cream-truck">
            <img
              src="/ice-cream_car.png"
              alt="Ice Cream Truck"
              className="truck-image"
            />
            <div className="light-effect"></div>
            <div className="light-beam"></div>
          </div>
        </div>
      </div>
    </>
  );
}
