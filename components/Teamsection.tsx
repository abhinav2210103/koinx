import TeamCard from "./TeamCard";
import Teamcard1 from "../public/team1.png"
import Teamcard2 from "../public/team2.png";
import Teamcard3 from "../public/team3.png";


export default function TeamSection() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
        <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div className=" md:grid-cols-3 gap-4">
          <TeamCard
            name="John Smith"
            des="Designation here"
            image={Teamcard1}
          />
          <TeamCard
            name="Elina Williams"
            des="Designation here"
            image={Teamcard2}
          />
          <TeamCard
            name="John Smith"
            des="Designation here"
            image={Teamcard3}
          />
        </div>
      </div>
    </div>
  );
}
