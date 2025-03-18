import ProfileChart from "@/components/profile/profilecharts";
import ProfileLuck from "@/components/profile/profileluck";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

export interface StudentData {
  firstname: string;
  lastname: string;
  studentId: string;
  avatarUrl: string;
}

export interface StudentProfile {
  profile: StudentData;
}

const MyProfile: React.FC = async () => {
  const headersList = await headers();
  const cookie = headersList.get("cookie");

  const student = await fetch(process.env.AUTH_URL + "/api/student/", {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: cookie as string,
    },
  });

  const studentData = (await student.json()) ?? {};

  return (
    <div>
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
        <div className="mt-4">
          {studentData.firstname + " " + studentData.lastname}
        </div>
        <div>{studentData.studentId}</div>
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
