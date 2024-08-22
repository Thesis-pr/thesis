const {Driver} =require ('../indexdatabase')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

           



  const getAllDriver= async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).send(drivers);
    } 
    
    catch (err) {
        res.status(404).send(err);
    }
}

const getOneDriver= async (req, res) => {
    try {
        const oneDriver = await Driver.findByPk(req.params.id);
        res.status(200).send(oneDriver);
    } catch (err) {
        res.status(404).send(err);
    }
}


const register = async (req, res) => {
    try {
        const { name,lastname,image,truck,images_truck ,mail, password,price,isActive,isConfirmed,photoOfcin,photoOfdriverLicence,carteGrise,experience} = req.body

        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(password);
        const existingDriver = await Driver.findOne({ where: { mail } });

        if (existingDriver) {
            return res.status(400).send({ message: 'Email already in use' });
        }

        if (!isPasswordValid) {
            return res.status(400).send({ message: 'Password does not meet the criteria' });
        }
           
        const newdriver= await Driver.create({
                        name,
                        lastname,
                        image,
                        truck,
                        images_truck,
                        mail, 
                        password: await bcrypt.hash(password, 10),
                        price,
                        isActive,
                        isConfirmed,
                        photoOfcin,
                        photoOfdriverLicence,
                        carteGrise,
                        experience
                    })


        const token = jwt.sign({ id: newdriver.id, name:newdriver.name,lastname:newdriver.lastname ,email:newdriver.email, address: newdriver.address }, secret);
        

        res.status(201).send({ token, message: 'Signup successful' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
    }
}

const deleteDriver = async (req, res) => {
    try {
        let idDriver = req.params.id;

        await  Driver.destroy({
            where: {
                id: idDriver
            }
        });

        res.status(200).send('Deleted Driver item with ID:' + idDriver);
    } catch (error) {
        console.error('Error deleting Driver item:', error);
        res.status(500).send({ error: 'An error occurred while deleting Driver item' });
    }
}; 

const updateDriver = async (req, res) => {
    try {
        const driverId = req.params.id;
        const [updatedRows] = await Driver.update(req.body, { where: { id: driverId  } });

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
    getAllDriver,
    getOneDriver,
    register,
    deleteDriver,
    updateDriver
}