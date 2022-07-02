const bcrypt = require("bcryptjs")
const User = require("../../models/user.model")
const Validator = require("../validators/user.validator")
const AuthValidator = require("../validators/auth.validator")
const jwt = require("jsonwebtoken")


const Registration = async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            password
        } = req.body

        const validator = await Validator.Store(req.body)
        if (!validator.isValid) {
            return res.status(422).json({
                status: false,
                message: validator.error
            })
        }

        // Check email already exist or not
        const existEmail = await User.findOne({ email: email });
        if (existEmail)
            return res.status(422).json({
                status: false,
                message: "Email already used.",
            });

        // check phone already exist or not
        const existPhone = await User.findOne({ phone: phone });
        if (existPhone)
            return res.status(422).json({
                status: false,
                message: "Phone already used.",
            });



        // password hash
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            email,
            phone,
            password: hashpassword
        })

        const saveUser = await newUser.save()
        if (!saveUser) {
            return res.status(501).json({
                status: false,
                message: "Failed to create user"
            })
        }
        res.status(201).json({
            status: true,
            message: "User created successfully"
        })
    } catch (error) {
        if (error) next(error)
    }
}


const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const validate = await AuthValidator.Login(req.body)

        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                message: validate.error
            })
        }

        const account = await User.findOne({ email: email }).exec();
        if (!account) {
            return res.status(404).json({
                status: false,
                message: "Can't find such user with email id"
            })
        }

        const result = await bcrypt.compare(password, account.password)
        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Invalid e-mail or password"
            })
        }

        const token = await jwt.sign({
            id: account._id,
            name: account.name
        },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        if(error){
            console.log(error);
            next(error)
        }
    } 
}




module.exports = {
    Registration,
    Login
};