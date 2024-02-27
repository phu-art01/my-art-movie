export const projectConfig = {
  projectName: "Y.I.M. Starter",
  favicon: "/favicon.ico",

  baseURL: import.meta.env.REACT_APP_API_SERVICE || "http://localhost:3001",
  apiVersion: import.meta.env.REACT_APP_API_VERSION || "/api",
  defaultLimitSize: 20,
  pageSizeOptions: [10, 20, 50, 100],
  formatDate: "DD/MM/YYYY",
};
export default projectConfig;
