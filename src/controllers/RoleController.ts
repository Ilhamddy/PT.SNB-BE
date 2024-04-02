import { Request, Response } from "express";
import Role from "../db/models/role";

const getRole = async (req: Request, res: Response) => {
  try {
    const roles = await Role.findAll({
      where: {
        active: true,
      },
    });
    return res.status(200).send({
      status: 200,
      message: " Data Get User Berhasil",
      data: roles,
    });
  } catch (error) {
    throw error;
  }
};

const createRole = async (req: Request, res: Response) => {
  try {
    const { roleName, active } = req.body;
    const createRoles = await Role.create({
      roleName,
      active,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(200).send({
      status: 200,
      message: " Data Get User Berhasil",
      data: createRoles,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "gagal",
      //   error: error.message, // Optionally, send error message to client
    });
  }
};

const deleteRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteRoles = await Role.findByPk(id);
    if (!deleteRoles) {
      return res.status(404).send({
        status: 404,
        message: " Data not Found",
        data: null,
      });
    }

    await deleteRoles?.destroy();

    return res.status(200).send({
      status: 200,
      message: " Data Delete User Berhasil",
      data: deleteRoles,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "gagal",
      //   error: error.message, // Optionally, send error message to client
    });
  }
};

const updateRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { roleName, active } = req.body;
    const updateRoles = await Role.findByPk(id);
    if (!updateRoles) {
      return res.status(404).send({
        status: 404,
        message: " Data not Found",
        data: null,
      });
    }

    updateRoles.roleName = roleName;
    updateRoles.active = active;

    return res.status(200).send({
      status: 200,
      message: " Data update User Berhasil",
      data: updateRoles,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "gagal",
      //   error: error.message, // Optionally, send error message to client
    });
  }
};

const getRoleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getRoles = await Role.findByPk(id);
    if (!getRoles) {
      return res.status(404).send({
        status: 404,
        message: " Data not Found",
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: " Data update User Berhasil",
      data: getRoles,
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "gagal",
      //   error: error.message, // Optionally, send error message to client
    });
  }
};
export default { getRole, createRole, deleteRole, updateRole, getRoleById };
