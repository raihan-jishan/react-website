// import icons
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import '../styles/contact.scss';
export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech service</h1>
          <p>we provide solution of your problems</p>
          <button type="submit" className="ServiceBtn"><Link to={'/services'} style={{color:'#000'}}>Services</Link></button>
        </main>
      </div>

      <div className="home2">
        <img
          src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=338&ext=jpg&ga=GA1.2.876838871.1667132056"
          alt="grapics"
        />
         
        <div>
          
          <p>
         
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
       
        </div>
      </div>
      {/* home 3 */}
      <div className="home3" id="about">
        <div>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, esse. Possimus necessitatibus harum fuga magni consectetur nobis voluptas, iste totam nihil veritatis, deleniti unde mollitia ullam. Dolor vel nostrum praesentium consequatur provident eos, temporibus in rerum minus facilis? Impedit, ab rem? Beatae quam est eum molestias maiores reprehenderit repellendus laboriosam doloribus commodi, sint voluptas explicabo magni perferendis. Atque fuga quos debitis eligendi iste repudiandae voluptas dolorem, minus, necessitatibus pariatur officiis sit. Officia ab vel reprehenderit! Inventore facere eaque expedita delectus.</p>
      </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
          <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
