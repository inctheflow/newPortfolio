import linkedin from "../pngs/linkedin.png";
import github from "../pngs/github.png";
function ContactMe() {
    return (
        <section>
<h3 style="text-align: center;">Contact Me</h3>
<a href="mailto:adityarajpoudel@gmail.com" style="text-align: center;">
    <button>
      EMAIL ME
    </button>
  </a>
  <h4>
    You can reach out to me via
  </h4>
  <div>
    <a href="https://www.linkedin.com/in/aditya-poudel-526a66277/" target="_blank">
      <img src={linkedin} alt="Linkedin" width="80" />
    </a>
    <a href="https://github.com/inctheflow" target="_blank">
      <img src={github} alt="Github" width="80" />
    </a>


        </div>
        </section>
);
}

export default Contact;