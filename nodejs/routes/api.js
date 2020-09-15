const express=require('express');
const router=express.Router();
var path=require('path'); 
const pathfolder=path.join(__dirname,'/map.html');
const index1=pathfolder.indexOf("node");
const newpath =pathfolder.substring(0,index1);
router.use(express.static(newpath+'public/css'));
router.use(express.static(newpath+'public/script'));
router.use(express.static(newpath+'public/data'));
router.use(express.static(newpath+'public/images'));
router.get('/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     const pathfolder=path.join(__dirname,'/maps.html');
     const index1=pathfolder.indexOf("node");
     const newpath =pathfolder.substring(0,index1);
     res.sendFile(newpath+'maps.html');
});
module.exports = router;