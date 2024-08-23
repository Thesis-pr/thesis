const {User} =require ('../indexdatabase')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;


  const getAllUsers= async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } 
    
    catch (err) {
        res.status(404).send(err);
    }
}


const getOneUser= async (req, res) => {
    try {
        const oneUser = await User.findByPk(req.params.id);
        res.status(200).send(oneUser);
    } catch (err) {
        res.status(404).send(err);
    }
}

 const signUp = async (req, res) => {
    try {
        const { name,lastname,image, email, password} = req.body

        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(password);
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).send({ message: 'Email already in use' });
        }

        if (!isPasswordValid) {
            return res.status(400).send({ message: 'Password does not meet the criteria' });
        }
           
        const newuser= await User.create({
                        name,
                        lastname,
                        image,
                        email, 
                        password: await bcrypt.hash(password, 10)
                        
                    })


        const token = jwt.sign({ id: newuser.id, name:newuser.name,lastname:newuser.lastname ,email:newuser.email, address: newuser.address }, secret);
        

        res.status(201).send({ token, message: 'Signup successful' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
    }
}



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check in both users and drivers tables
        const user = await User.findOne({ where: { email } }) || await Driver.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ message: 'Email not found in users or drivers' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({id: user.id, name:user.name, lastname:user.lastname, email:user.email, address: user.address }, secret);

        res.send({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
    }
}

const deleteuser = async (req, res) => {
    try {
        let idUser = req.params.id;

        await  User.destroy({
            where: {
                id: idUser
            }
        });

        res.status(200).send('Deleted user item with ID:' + idUser);
    } catch (error) {
        console.error('Error deleting user item:', error);
        res.status(500).send({ error: 'An error occurred while deleting user item' });
    }
}; 



const updateUser = async (req, res) => {
    try {
        const userid = req.params.id;
        const [updatedRows] = await User.update(req.body, { where: { id: userid  } });

        if (updatedRows === 0) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.send({ message: 'User updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
    }
};






module.exports={
    getAllUsers,
    getOneUser,
    signUp,
    loginUser,
    deleteuser,
    updateUser
}