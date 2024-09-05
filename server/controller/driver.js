const { Driver } = require("../indexdatabase");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
           



  const getAllDriver= async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).send(drivers);
    } 
    
    catch (err) {
        res.status(404).send(err);
    }
}

const getOneDriver = async (req, res) => {
  try {
    const oneDriver = await Driver.findByPk(req.params.id);
    res.status(200).send(oneDriver);
  } catch (err) {
    res.status(404).send(err);
  }
};

const register = async (req, res) => {
    try {
        const { name, lastname, image, truck, images_truck ,  mail, password, tel,  address, isActive, isConfirmed, photoOfcin,photoOfdriverLicence,carteGrise, experience } = req.body

        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(password);
        const existingDriver = await Driver.findOne({ where: { mail } });

    if (existingDriver) {
      return res.status(400).send({ message: "Email already in use" });
    }

        if (!isPasswordValid) {
            return res.status(400).send({ message: 'Password does not meet the criteria' });
        }
           
        

        const pic=image
        const uploaded=await cloudinary.uploader.upload(pic,{})
        console.log("coud",uploaded)

        const cin = photoOfcin
        const uploaded1= await cloudinary.uploader.upload(cin, {})
        console.log('uploaded1', uploaded1)

        const license = photoOfdriverLicence
        const uploaded2= await cloudinary.uploader.upload(license, {})
        console.log('uploaded2', uploaded1)

        const carte = carteGrise
        const uploaded3= await cloudinary.uploader.upload(carte, {})
        console.log('uploaded3', uploaded3)
        const uploadedPromises = images_truck.map(imageData =>{
            return cloudinary.uploader.upload(imageData, {})
        })
        const uploadedResults = await Promise.all(uploadedPromises)
        console.log('uploaded images:', uploadedResults)
       
       const newarray= uploadedResults.map((el)=>{
            return el.secure_url
        })
        console.log("new array", newarray)
        const newdriver= await Driver.create({
                        name,
                        lastname,
                        image:uploaded.secure_url,
                        truck,
                        images_truck:newarray,
                        mail, 
                        password: await bcrypt.hash(password, 10),
                        tel,
                    
                        address,
                        isActive,
                        isConfirmed,
                        photoOfcin:uploaded.secure_url,
                        photoOfdriverLicence:uploaded.secure_url,
                        carteGrise:uploaded.secure_url,
                        experience
                    })


        // const token = jwt.sign({ id: newdriver.id, name:newdriver.name,lastname:newdriver.lastname ,email:newdriver.email, address: newdriver.address }, secret);
        const token = jwt.sign({id: newdriver.id, name:newdriver.name, lastname:newdriver.lastname, image:newdriver.image,  truck: newdriver.truck,images_truck:newdriver.images_truck,mail:newdriver.mail, tel: newdriver.tel ,address:newdriver.address,isActive:newdriver.isActive,isConfirmed:newdriver.isConfirmed,photoOfcin:newdriver.photoOfcin,photoOfnewdriverLicence:newdriver.photoOfnewdriverLicence,carteGrise:newdriver.carteGrise,experience:newdriver.experience}, secret);
        

        res.status(201).send({ token, message: 'Signup successful' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
    }
}



const loginDriver = async (req, res) => {
    try {
        const { mail, password } = req.body;
        
        const driver =  await Driver.findOne({ where: { mail } });

        if (!driver) {
            return res.status(404).send({ message: 'Email not found in drivers or drivers' });
        }

        const isPasswordValid = await bcrypt.compare(password, driver.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({id: driver.id, name:driver.name, lastname:driver.lastname, image:driver.image,  truck: driver.truck,images_truck:driver.images_truck,mail:driver.mail,tel: driver.tel,price:driver.price,address:driver.address,isActive:driver.isActive,isConfirmed:driver.isConfirmed,photoOfcin:driver.photoOfcin,photoOfdriverLicence:driver.photoOfdriverLicence,carteGrise:driver.carteGrise,experience:driver.experience }, secret);
         
        res.send({ token });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
    }
}














const deleteDriver = async (req, res) => {
  try {
    let idDriver = req.params.id;

    await Driver.destroy({
      where: {
        id: idDriver,
      },
    });

    res.status(200).send("Deleted Driver item with ID:" + idDriver);
  } catch (error) {
    console.error("Error deleting Driver item:", error);
    res
      .status(500)
      .send({ error: "An error occurred while deleting Driver item" });
  }
};

const updateDriver = async (req, res) => {
  try {
    const driverId = req.params.id;
    const [updatedRows] = await Driver.update(req.body, {
      where: { id: driverId },
    });

    if (updatedRows === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({ message: "User updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
};


module.exports={
    getAllDriver,
    getOneDriver,
    register,
    loginDriver,
    deleteDriver,
    updateDriver
}