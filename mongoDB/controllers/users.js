import bcrypt from "bcrypt";
import { User } from "../Schema/userSchema.js";

export const userSignup = async (req, res) => {
    const { fName, lName, email, password, confirmPassword } = req.body;

    //FIRST WAY OF DOING IT:
    // const saltRounds = 10;
    // bcrypt.hash(password, saltRounds, async (err, hash) => {
    //     try {
    //         const signupDetails = new User({email: email, password: hash, name: `${fName} ${lName}` })
    //         await signupDetails.save()
    //         res.status(200).send("created")
    //     } catch (error) {
    //         res.send({ message: error.message })
    //     }
    // });
    /************ second way of doing it *********/
    //     try {
    //         const saltRounds = 10;
    //         const hashPassword = await bcrypt.hash(password, saltRounds);

    //         const result = new User({email, password: hashPassword, name: `${fName} ${lName}`})
    //          const responseResult = await result.save()
    //         res.status(200).send({ responseResult })
    //     } catch (error) {
    //         res.status(404).send({ message: error.message })
    //     }
    // }
    /************ third way of doing it *********/
    try {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        if(password !== confirmPassword) return res.status(404).send({ message: "Password dose'nt match."})

        const result = await User.create({ email, password: hashPassword, name: `${fName} ${lName}` })

        res.status(200).send({ result })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).send({ message: "User doesn't exist."})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).send({ message: "Invalid credentials."})

        res.send("Home Page")
        
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}