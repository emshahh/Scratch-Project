const express = require('express');

const pinController = require('../controllers/pinController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController')

const router = express.Router();


router.get('/comments',
    commentController.getAllComments,
    (req, res) => {
        res.status(200).json(res.locals.comments)
    }
);

router.post('/createuser', userController.createUser,(req,res)=>{
    return res.status(200).json(res.locals.id);
});

router.post('/updateuser', userController.updateUser,(req,res)=>{
    return res.status(200).json('User updated!');
});

router.post('/userlogin', userController.getUserWithLogin,(req,res)=>{
    return res.status(200).json(res.locals.status);
});

router.get('/user/:id', userController.getUser,(req,res)=>{
    return res.status(200).json(res.locals.user);
});

router.get('/users', userController.getAllUsers,(req,res)=>{
    return res.status(200).json(res.locals.users);
});

router.post('/comments',
    commentController.postComment,
    (req, res) => {
        console.log('We are comming back')
        res.status(200).json(res.locals.comment)
    }
)

router.get('/comments',
    commentController.getAllComments,
    (req, res) => {
        res.status(200).json(res.locals.comments)
    }
)

router.delete('/deleteComment/:id',
    commentController.deleteComment,
    (req, res) => {
        res.status(200).json(res.locals.comment)
    }
)

//SET UP FOR USER EDITING THEIR COMMENTS
// NOTE: need to set up pin middleware that returns a comment when pin is clicked
// NOTE: need to set up a button component that updates component
router.put('/comments', commentController.getAllComments, commentController.editComment, commentController.postComment), (req, res) => {
    res.status(200).json(res.locals.comment)
}


// router.post('/pins',
//     pinController.postPin,
//     (req, res) => {
//         res.status(200).json(res.locals.pin)
//     }
// )

router.get('/pins',
    pinController.getAllpins,
    (req, res) => {
        res.status(200).json(res.locals.pins);
    }
)

router.get('/pins/:id',
    pinController.getUserPins,
    (req, res) => {
        res.status(200).json(res.locals.userpins);
    }
)


module.exports = router;