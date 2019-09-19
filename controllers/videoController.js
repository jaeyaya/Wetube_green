import {videos} from "../db.js";
import routes from "../routes";
export const home = (req, res) =>{

res.render("home", { pageTitle: "Home", videos : videos})
};
export const search = (req, res) => {
    const {query: { term: searchingFor }} = req;
    // const searchingFor = req.query.term;
    res.render("search", { pageTitle : "Search", searchingFor, videos});
};
export const getUpload = (req, res) => 
res.render("upload", { pageTitle : "Upload"});

export const postUpload = (req, res) => {
    const {
        body:{file, title, description}
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(1231))
};

export const videoDetail = (req, res) => 
res.render("videoDetail", { pageTitle : "Video Detail"});

export const editVideo = (req, res) => 
res.render("editVideo", { pageTitle : "Edit Video"});

export const deleteVideo = (req, res) =>
 res.render("deleteVideo", { pageTitle : "Delete Video"});
 