import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
    const {query: { term: searchingFor }} = req;
    // const searchingFor = req.query.term;
    res.render("search", { pageTitle : "Search", searchingFor, videos});
};
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });


export const postUpload = async (req, res) => { 
    const {
          body: { title, description },
          file: { path }
        } = req;
 
  // const title = req.body.title;
  // const description = req.body.description;
  // const path = req.file.path;  

  
     
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
      });
      res.redirect(routes.videoDetail(newVideo.id));
    };

export const videoDetail = (req, res) => 
res.render("videoDetail", { pageTitle : "Video Detail"});

export const editVideo = (req, res) => 
res.render("editVideo", { pageTitle : "Edit Video"});

export const deleteVideo = (req, res) =>
 res.render("deleteVideo", { pageTitle : "Delete Video"});
 