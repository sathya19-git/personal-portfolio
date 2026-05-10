function Home() {
  return (
    <section className="image">

      <div className="image-left">
        <h1>Hi, I'm Sathya </h1>
        <h2>Python Full Stack Developer</h2>

        <p>Building modern web applications with Python & React</p>

        <div className="buttons">
          
          <a href="/resume.pdf" download><button>Download Resume</button></a>
        </div>
      </div>

      
      <div className="image-right">
        <img src="/profile.jpg" alt="profile" />
      </div>

    </section>
  );
}

export default Home;