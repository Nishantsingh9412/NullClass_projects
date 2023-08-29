import Questions from "../models/Questions.js"

export const AskQuestion = async (req,res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions({ ...postQuestionData , userId : req.userId});
    try{
        await postQuestion.save();
        res.status(200).json("Posted a Question successfully");
    }catch(error){
        console.log(error);
        res.status(409).json("Couldn't post a new question ");
    }

}