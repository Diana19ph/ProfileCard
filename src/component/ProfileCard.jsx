export default function ProfileCard({
  image,
  name,
  surname,
  age,
  profession,
  bio,
}) {
  return (
    <div className="bg-[url('https://i.pinimg.com/1200x/f5/f8/45/f5f84585a28742023c5bed0770bdcecc.jpg')] absolute inset-0 bg-slate-950/80 bg-cover bg-center min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-[550px] h-[760px] bg-[#25272C]/70 p-8 rounded-[30px]  flex flex-col gap-6">
        <div>
          <img
            src={image}
            alt={name}
            className="w-[270px] h-[270px] rounded-full object-cover mx-auto"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[#9496b1] font-bold text-[30px]">
            Name: <span className="text-white text-[25px]">{name}</span>
          </h2>
          <h2 className="text-[#9496b1] font-bold text-[30px]">
            Surname: <span className="text-white text-[25px]">{surname}</span>
          </h2>
          <p className="text-[#9496b1] font-bold text-[30px]">
            Age: <span className="text-white text-[25px]">{age}</span>
          </p>
          <p className="text-[#9496b1] font-bold text-[30px]">
            Profession:{" "}
            <span className="text-white text-[25px]">{profession}</span>
          </p>
          <p className="text-[#9496b1] font-bold text-[30px]">
            Bio: <span className="text-white text-[25px] font-bold">{bio}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
