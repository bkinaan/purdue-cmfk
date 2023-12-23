import About_Section from "./about_section";

export default function About() {
  return (
    <div>
      <div className=" font-montserrat text-white font-bold text-center text-5xl md:text-8xl py-36">
        About the Program
      </div>
      <About_Section
        header="Empowering Children"
        subtext="College Mentors for Kids pairs children with college mentors,
        sparking joy in learning and inspiring them to dream big."
        img="mentor_guiding.png"
        placement={true}
      />
      <About_Section
        header="Personalized Engagement"
        subtext="With one-on-one matching, mentors get to know their little buddy
            individually and watch them grow."
        img="mentor_leading.png"
        placement={false}
      />
      <About_Section
        header="Developing Future Leaders"
        subtext="A unique platform that offers college students the opportunity to develop their leadership skills, while providing enriching after-school activities for children, all funded through member fundraising."
        img="mentor_community.png"
        placement={true}
      />
    </div>
  );
}
