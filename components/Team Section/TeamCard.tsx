import Image from "next/image";
import { StaticImageData } from 'next/image';

type TeamCardProps = {
  name: string;
  image:  StaticImageData;
  des: string;
};

export default function TeamCard({ name, image, des }: TeamCardProps) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="justify-center flex flex-col items-center">
        <div>
          <Image
            className="rounded-xl w-44 lg:w-96"
            src={image}
            alt={name}
          />
        </div>
        <div className="text-[#0F1629] text-[15px] font-semibold py-1">
          {name}
        </div>
        <div className="text-[#788F9B] text-xs font-medium">{des}</div>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.
        Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
        nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus
        gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.
      </div>
    </div>
  );
}
