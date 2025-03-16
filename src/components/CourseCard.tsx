import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import { CustomButton } from "./actions/CustomButton";
import { Badge } from "./ui/badge";
import { Button } from "./ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface CourseCardProps {
  course: CourseListAllItem;
  onAction?: () => void;
  isLoaded?: boolean;
  actionButtonUseFor: ButtonConfigKeys;
  showCourseStatus?: boolean;
}

const CourseCard = ({
  course,
  isLoaded = true,
  onAction,
  actionButtonUseFor,
  showCourseStatus,
}: CourseCardProps) => {
  const { mutate: toggleInterested } = useMutation({
    mutationFn: async () =>
      axios.post(
        course.is_interested
          ? BackendRoutes.DELETE_INTERESTED_COURSE
          : BackendRoutes.CREATE_INTERESTED_COURSE,
        { course_id: course.id },
      ),
    onMutate: () =>
      toast.loading(`กำลังเพิ่ม ${course.name} ลงในรายการที่สนใจ...`, {
        id: `${course.is_interested ? "delete" : "create"}-interested-${course.id}`,
      }),
    onError: (error) =>
      toast.error(`[${error.name}] เกิดข้อผิดพลาด: ${error.message}`, {
        id: `${course.is_interested ? "delete" : "create"}-interested-${course.id}`,
      }),
    onSuccess: () => {
      toast.success(
        course.is_interested
          ? `ลบวิชา ${course.name} ออกจากรายการที่สนใจสำเร็จ`
          : `เพิ่มวิชา ${course.name} ลงในรายการที่สนใจสำเร็จ`,
        {
          id: `${course.is_interested ? "delete" : "create"}-interested-${course.id}`,
        },
      );
      queryClient.refetchQueries({
        predicate: (query) => query.queryKey[0] == "GET_COURSES",
      });
      queryClient.refetchQueries({ queryKey: ["GET_INTERESTED_COURSE"] });
    },
  });

  const { mutate: publishCourse } = useMutation({
    mutationFn: async () =>
      axios.post(BackendRoutes.PUBLISH_COURSE, { id: course.id }),
    onMutate: () =>
      toast.loading(`กำลังเผยแพร่ ${course.name}...`, {
        id: `publish-${course.id}`,
      }),
    onError: (error) =>
      toast.error(`[${error.name}] เกิดข้อผิดพลาด: ${error.message}`, {
        id: `publish-${course.id}`,
      }),
    onSuccess: () => {
      toast.success(`เผยแพร่วิชา ${course.name} สำเร็จ`, {
        id: `publish-${course.id}`,
      });
      queryClient.refetchQueries({
        predicate: (query) => query.queryKey[0] == "GET_COURSES",
      });
    },
  });

  const { mutate: deleteCourse } = useMutation({
    mutationFn: async () =>
      axios.post(BackendRoutes.DELETE_COURSE, { course_id: course.id }),
    onMutate: () =>
      toast.loading(`กำลังลบ ${course.name}...`, {
        id: `delete-${course.id}`,
      }),
    onError: (error) =>
      toast.error(`[${error.name}] เกิดข้อผิดพลาด: ${error.message}`, {
        id: `delete-${course.id}`,
      }),
    onSuccess: () => {
      toast.success(`ลบวิชา ${course.name} สำเร็จ`, {
        id: `delete-${course.id}`,
      });
      queryClient.refetchQueries({
        predicate: (query) => query.queryKey[0] == "GET_COURSES",
      });
    },
  });
  return (
    <Skeleton className="rounded-3xl">
      <Card className="rounded-3xl bg-white p-5 shadow-md shadow-neutral-200 sm:p-8">
        <CardHeader className="flex items-start justify-between p-0">
          <div className="flex flex-col gap-x-4 gap-y-1 lg:flex-row">
            <h2 className="max-w-sm font-bold">{course.name}</h2>
            <div className="flex flex-row gap-x-2 md:flex-row">
              <Badge color="primary"></Badge>
            </div>
          </div>

          <div className="flex flex-col-reverse items-end justify-end gap-2 lg:flex-row lg:items-start">
            <p className="text-primary hidden max-w-72 text-right font-semibold sm:block">
              {course.course_owner}
            </p>
            {user?.role == role_type.CEDT_STUDENT && (
              <Button
                isIconOnly
                onPress={() => toggleInterested()}
                isDisabled={!!course.ranking_id}
              >
                <Bookmark
                  fill={course.is_interested ? "#ff8e2f" : "#FFFFFF"}
                  className="text-primary size-6 lg:size-7"
                />
              </Button>
            )}
          </div>
        </CardHeader>

        {/* Card Body */}
        <CardContent className="p-0">
          <p className="pt-4">{course.short_description}</p>
          <p className="text-sm">
            หมวดหมู่: {course.course_category.join(", ")}
          </p>
        </CardContent>

        <Divider />

        {/* Card Footer */}
        <CardFooter className="flex flex-col items-start gap-4 p-0 sm:grid sm:grid-cols-5">
          <div className="col-span-3 grid gap-x-4 gap-y-2 lg:grid-cols-2">
            <div>
              {course.schedule.map((schedule, idx) => (
                <div key={idx} className="grid grid-cols-2">
                  <p>{dateToThai(schedule.day)}</p>
                  <p>
                    {formatScheduleTime(String(schedule.start_time))} -{" "}
                    {formatScheduleTime(String(schedule.end_time))}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {course.class_location.map((location, idx) => (
                <p key={idx}>{location}</p>
              ))}
            </div>
          </div>
          <div className="col-span-2 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            {electiveSchedule?.data.type ==
              ElectiveScheduleType.BEFORE_ELECTIVE && (
              <CustomButton useFor="delete" onPress={() => deleteCourse()} />
            )}
            {showCourseStatus && course.status == status_type.DRAFT && (
              <CustomButton
                useFor={actionButtonUseFor}
                onPress={() => publishCourse()}
              />
            )}
            <CustomButton
              useFor={showCourseStatus ? "edit" : "read-more"}
              onPress={onAction}
            />
          </div>
        </CardFooter>

        {/* Manage Buttons */}
      </Card>
    </Skeleton>
  );
};

export default CourseCard;
