import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import { createUser, deleteUser, getAll, getById, updateUser, findUserByEmail, receiveDeviceData, retrieveDeviceData } from "../repositories/user.repository";

export const create = async (req, res) => {
    try {
        await userValidation.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
}

export const get = async (req, res) => {
    try {
        const users = await getAll();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
}

export const getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id));
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
}

export const update = async (req, res) => {
    try {
        const user = await updateUser(Number(req.params.id), req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
}

export const remove = async (req, res) => {
    try {
        await deleteUser(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
}

export const login = async (req, res) => {
    try {
        const user = await findUserByEmail(req.body.email);

        // if (!user) {
        //     console.log("Usuário não existe");
        //     res.status(404).send();;
        //     return;
        // }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
        //    console.log("Credenciais inválidas");
            res.status(202).send();
            return;
        }

        res.status(200).send(user);
    } catch (e) {
        res.status(204).send();
    }
};

export const receiveData = async (req, res) => {
    const { sensorValue } = req.body;
    console.log("1");

    try {
        // Convert sensorValue to a boolean value
        const sensorCheck = Boolean(sensorValue);
        const userId = 1;

        // Save in the database using Prisma
        const devices = await receiveDeviceData(sensorCheck, userId);

        res.status(200).send(devices);
    } catch (e) {
        console.log("2");
        res.status(400).send(e);
    }
};

export const retrieveData = async (req, res) => {
    try {
        const devices = await retrieveDeviceData();
        res.status(200).send(devices);
    } catch (e) {
        res.status(400).send(e);
    }
};