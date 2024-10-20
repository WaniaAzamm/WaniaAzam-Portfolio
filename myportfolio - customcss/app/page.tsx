import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">
            Hey there! <br />
            <span className="highlight">Wania Azam</span>
          </h1>
          <p className="home-description">
            Welcome to my portfolio! Feel free to explore my projects, and don’t hesitate to reach out.
          </p>
          <Link href="/contact">
            <button className="hire-button">
              Hire Me
            </button>
          </Link>
        </div>
        
        <div className="home-image">
          <Image
            height={1000}
            width={1000}
            className="profile-pic"
            src="/pic.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}
