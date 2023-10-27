import about from "../../../assets/images/about_us/parts.jpg";
import about1 from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={about1} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={about}
            className="absolute right-5 top-1/2 border-8 border-white w-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-amber-500">About us</h2>
          <h1 className="text-3xl font-bold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </h1>
          <p className="py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="mb-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-warning text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
