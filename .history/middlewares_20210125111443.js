import multer from "multer";
import routes from "./routes";


export const uploadVideo = multer({dest: "videos/"})


export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user ={
    isAuthenticated:true,
    id:1
  }
  next();
};

export const uploadVideoMiddleware = uploadVideo.single("videoFile");