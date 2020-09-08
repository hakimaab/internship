const express=require('express');
const router=express.Router();
var path=require('path'); 
const pathfolder=path.join(__dirname,'/map.html');
const index1=pathfolder.indexOf("node");
const newpath =pathfolder.substring(0,index1);
router.use(express.static(newpath+'public/css'));
router.use(express.static(newpath+'public/script'));
router.use(express.static(newpath+'public/data'));
router.get('/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     const pathfolder=path.join(__dirname,'/map.html');
     const index1=pathfolder.indexOf("node");
     const newpath =pathfolder.substring(0,index1);
     res.sendFile(newpath+'map.html');
});
router.get('/maps',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const pathfolder=path.join(__dirname,'/maps.html');
    const index1=pathfolder.indexOf("node");
    const newpath =pathfolder.substring(0,index1);
    res.sendFile(newpath+'maps.html');
});
router.get('/quartile',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const pathfolder=path.join(__dirname,'/quartile.html');
    const index1=pathfolder.indexOf("node");
    const newpath =pathfolder.substring(0,index1);
    res.sendFile(newpath+'quartile.html');
});
router.get('/map',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const pathfolder=path.join(__dirname,'/map.html');
    const index1=pathfolder.indexOf("node");
    const newpath =pathfolder.substring(0,index1);
    res.sendFile(newpath+'map.html');
});
router.get('/test',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const pathfolder=path.join(__dirname,'/population.csv');
    res.sendFile(pathfolder);
});
router.get('/sendfile',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const pathfolder=path.join(__dirname,'/BesoinsInclusionNumerique.csv');
    res.sendFile(pathfolder);
});
router.get('/send',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    const pathfolder=path.join(__dirname,'/customgeo.json');
    res.sendFile(pathfolder);
});
module.exports = router;