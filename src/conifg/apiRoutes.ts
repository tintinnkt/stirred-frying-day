export enum BackendRoutes {}
export enum FrontendRootRoutes {
  ADMIN = "/admin",
  LIST = "/courses",
  PLANNER = "/planners",
  LOGIN = "/login",
}
export enum FrontendRoutes {
  ADMIN_MANAGEMENT = `${FrontendRootRoutes.ADMIN}/management`,
  COURSE_LIST = `${FrontendRootRoutes.LIST}`,
  PLANNER = `${FrontendRootRoutes.PLANNER}`,
}
