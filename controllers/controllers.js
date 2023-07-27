import FamilyModel from "../models/family_model.js";
import FamilyNCModel from "../models/family_no_confirmation_model.js";

const index = (req, res) => {
    res.render('index');
}

const confirmation = (req, res) => {
    res.render('confirmation');
}

const geetConfirmation = async (req, res) => {
    const countFamily = await familyModel.find().exec();
    res.json({countFamily: countFamily.length, families: countFamily});
}

const makeConfirmation = (req, res) => {
    const { family , members, message} = req.body;

    const isExist = FamilyModel.findOne({ family: family }).exec()
    .then((doc) => {
        if (doc) {
            let thanks = "Ya confirmaste tu asistencia previamente, gracias"
            res.render('thanks', {thanks});
        } else {
            const newFamily = new FamilyModel({ family, members, message });
            const thanks = "¡Te esperamos!"
            newFamily.save()
            .then(() => {
                return res.render('thanks', {thanks});
            })
            .catch((err) => {
                console.log(err);
            });
        }
    })
}

const noConfirmation = (req, res) => {
    const thanks = "Gracias por tu respuesta"
    res.render('no-confirmation', {thanks});
}

const makeNoConfirmation = (req, res) => {
    const { family , members, message} = req.body;
    
    const newFamily = new FamilyNCModel({ family, members, message });
    const thanks = "¡GRACIAS!"
    newFamily.save()
    .then(() => {
        res.render('thanks', {thanks});
    })
    .catch((err) => {
        console.log(err);
    });
}

export default { index, confirmation, makeConfirmation, noConfirmation, makeNoConfirmation, geetConfirmation};