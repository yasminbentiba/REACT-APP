

import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
 /*  res.send("THIS WORKS!"); */
try {
    /*on met await pour tt fct  asyc pour que l'action devient synchrone et elle est par defaut asynchrone */
    const postMessages = await PostMessage.find(); 
    console.log(postMessages);
    res.status(200).json(postMessages);
    
} catch (error) {
    res.status(404).json({message : error.message});
}
};

export const createPost = async(req, res) => {
    const post = req.body;

    const newPost=new PostMessage(post);
    try {
        await newPost.save();
        /* HTTP status codes: https://www.restapitutorial.com/https */
        res.status(201).json(newPost);
    } catch (error) {
        
        res.status(409).json({message : error.message});
    }
  };