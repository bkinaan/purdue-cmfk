export default function About() {
  return (
    <div>
      <div className=" font-montserrat text-black text-center text-5xl md:text-8xl pt-36">
        About the Program
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="bg-white text-black font-montserrat text-center md:text-right p-8 text-sm md:text-xl shadow-xl shadow-custom-green m-16 rounded-xl">
          <div className="text-2xl md:text-6xl pb-8">
            Empowering Children Through Mentoring
          </div>
          <div>
            College Mentors for Kids pairs children with college mentors,
            sparking joy in learning and inspiring them to dream big.
          </div>
        </div>
        <img src="mentor_guiding.png" alt="two people" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <img
          className="hidden md:block"
          src="mentor_leading.png"
          alt="man and girl"
        />
        <div className="bg-white text-black font-montserrat text-center md:text-right p-8 text-sm md:text-xl shadow-xl shadow-custom-green m-16 rounded-xl">
          <div className="text-2xl md:text-6xl pb-8">
            A Personalized Approach to Engagement
          </div>
          <div>
            With one-on-one matching, mentors get to know their little buddy
            individually and watch them grow.
          </div>
        </div>
        <img
          className="md:hidden"
          src="mentor_leading.png"
          alt="man and girl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="bg-white text-black font-montserrat text-center md:text-right p-8 text-sm md:text-xl shadow-xl shadow-custom-green m-16 rounded-xl">
          <div className="text-2xl md:text-4xl pb-8">
            Developing Future Leaders
          </div>
          <div>
            College Mentors for Kids not only benefits children but also
            provides a platform for college students to hone their leadership
            skills. The program is free for both kids and mentors through member
            fundraising goals, promoting equitable access to enriching
            after-school opportunities.
          </div>
        </div>
        <img src="mentor_community.png" alt="two people" />
      </div>
    </div>
  );
}
