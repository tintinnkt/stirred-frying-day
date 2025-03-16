import ProfileChart from "@/components/profile/profilecharts";
import ProfileLuck from "@/components/profile/profileluck";
import { auth } from "@/lib/auth";
import Image from "next/image";
import React from "react";

export type StudentData = {
  firstname: string;
  lastname: string;
  studentId: string;
  avatarUrl: string;
};

export interface StudentProfile {
  profile: StudentData;
}

const MyProfile: React.FC = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <div className="justify-center bg-center text-center">
        <div className="m-4 text-2xl font-bold">My Profile</div>
        <div className="mt-2 mb-2 flex w-full justify-center">
          <Image
            className="justify-items-center rounded-[100%] border border-black"
            src="/temp_profile_picture.png"
            width={128}
            height={128}
            alt="Profile picture"
          />
        </div>
        <div className="mt-4">Krittin J.</div>
        <div>6738087921</div>
        <div className="mt-4">Civil Engineering</div>
      </div>

      <div className="mt-10 w-full text-center">
        <ProfileChart />
      </div>

      <div className="mt-10 w-full text-center">
        <ProfileLuck />
      </div>
    </div>
  );
};

export default MyProfile;
