import Questions from "../models/Questions.js";
import mongoose, { mongo }  from "mongoose";

export const AskQuestion = async (req,res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData);
    try{
        await postQuestion.save();
        res.status(200).json("Posted a Question successfully");
    }catch(error){
        console.log(error);
        res.status(409).json("Couldn't post a new question ");
    }

}



export const getAllQuestions =  async (req,res) => {
    try{
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    }catch(error){
        res.status(404).json({message:error.message}); 
    }
}

export const deleteQuestion = async(req,res) => {
    // req.params     ------>    ID URL From  
    const {id:_id} = req.params;    
    // Checking for Id coming from URL is valid or not 
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("question unavailable...");
      }
    try {
        // Find question's Id from Db and according to that send status
        await Questions.findByIdAndRemove( _id );
        res.status(200).json({message : "successfully deleted ..."});
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}