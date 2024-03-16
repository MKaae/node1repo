import { Router } from "express";
import { homepagePage, feb2ndPage, feb16Page, feb23Page, mar1Page, mar8Page, mar15Page, feb9Page } from "../util/readPages.js"

const router = Router();

router.get(`/`, (req, res) => {
    res.send(homepagePage);
});
router.get(`/feb2nd`, (req, res) => {
    res.send(feb2ndPage);
});
router.get(`/feb9`, (req, res) => {
    res.send(feb9Page);
});
router.get(`/feb16`, (req, res) => {
    res.send(feb16Page);
});
router.get(`/feb23`, (req, res) => {
    res.send(feb23Page);
});
router.get(`/mar1`, (req, res) => {
    res.send(mar1Page);
});
router.get(`/mar8`, (req, res) => {
    res.send(mar8Page);
});
router.get(`/mar15`, (req, res) => {
    res.send(mar15Page);
});


export default router;