const Schedule = require('../../../models/Management/schedule/schedule');

const addSchedule=async(req, res)=>{
    // Check whether the user with this email already exists
    let success = false
    try {
        let firstTime = await Schedule.findOne({startTime : req.body.startTime})
        if(firstTime){
            return res.status(400).json({success,error:"Sorry Schedule already exists."})
        }
        else{

        let schedule = await Schedule.create({
            startTime:req.body.startTime,
            endTime:req.body.endTime,
            monday : req.body.monday,
            tuesday : req.body.tuesday,
            wednesday : req.body.wednesday,
            thursday : req.body.thursday,
            friday : req.body.friday,
            saturday : req.body.saturday,
            sunday : req.body.sunday

        })
        success = true
        return res.json({success})
    }
    }
    catch (error) {
        return res.status(500).json({success,error:error.message})

    }
}

const getSchedule = async(req,res)=>{
    try{
    let schedule = await Schedule.find();
    return res.send(schedule)
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}

const updateSchedule = async(req,res)=>{
    try 
    {
        let schedule = await Schedule.findOne({_id:req.params.id});
        if(!schedule){
            return res.status(400).json({error:"Sorry Schedule doesnot exists."})
        } 

        let newNode = {}
        if(req.body.startTime){newNode.startTime = req.body.startTime}
        if(req.body.endTime){newNode.endTime = req.body.endTime}
        if(req.body.monday){newNode.monday = req.body.monday}
        if(req.body.tuesday){newNode.tuesday = req.body.tuesday}
        if(req.body.wednesday){newNode.wednesday = req.body.wednesday}
        if(req.body.thursday){newNode.thursday = req.body.thursday}
        if(req.body.friday){newNode.friday = req.body.friday}
        if(req.body.saturday){newNode.saturday = req.body.saturday}
        if(req.body.sunday){newNode.sunday = req.body.sunday}

        const updateNote = await Schedule.findByIdAndUpdate(req.params.id,{$set:newNode},{new:true})
        return res.json({updateNote})

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}




module.exports = {
    addSchedule,
    getSchedule,
    updateSchedule
}