const company = require("../models/company");
const User = require("../models/User");
const {TreeSet, TreeMap, TreeMultiSet, TreeMultiMap} = require('jstreemap');
const path = require("path");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/../../client/match/match.html'));
});

router.get("/find", async(req, res) => {
    const companies = await company.find();
    const users = await User.find();

    let set = new TreeSet();
    var matchingList = {};

    users.forEach(userIterator => {
        if(!matchingList[userIterator._id]) {
            matchingList[userIterator._id] = {};
        }

        companies.forEach(companyIterator=> {
            if(!matchingList[userIterator._id][companyIterator.name]) {
                matchingList[userIterator._id][companyIterator.name] = {};
            }

            companyIterator.internships.forEach(internshipIterator => {
                internshipIterator.technologies.forEach(internshipTechnologiesIterator => {
                    //console.log("Tehnologie", internshipTechnologiesIterator.name);
                    
                    if(userIterator.iWant){
                        userIterator.iWant.forEach(iWantIterator => {
                            //console.log("iWant:", iWantIterator);
                            if(internshipTechnologiesIterator.name == (iWantIterator))
                                set.add(iWantIterator);
                        });
                    }

                    if(userIterator.iKnow){
                        userIterator.iKnow.forEach(iKnowIterator => {
                            //console.log("iKnow:", iKnowIterator);
                            if(internshipTechnologiesIterator.name == (iKnowIterator))
                                set.add(iKnowIterator);
                        });
                    }

                });
                console.log("Size: ", internshipIterator.technologies.length);
                matchingList[userIterator._id][companyIterator.name][internshipIterator.name] = set.size / internshipIterator.technologies.length * 100;
                set.clear();
            })
        })
    });

    
    console.log("Match list:", matchingList);
    console.log(req.session._id)
    if(req.session._id)
        res.status(200).json(matchingList[req.session._id]);
    else res.status(401).send();
});

module.exports = router;