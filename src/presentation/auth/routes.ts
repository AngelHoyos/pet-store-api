import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();
        const dataSources = new AuthDataSourceImpl();
        const authRepository = new AuthRepositoryImpl(dataSources);
        const controller = new AuthController(authRepository);

        /**
         * Post track
         * @openapi
         * /api/auth/login:
         *   post:
         *     tags:
         *       - users
         *     summary: "Post login"
         *     description: Esta ruta permite iniciar sesión al usuario
         *     requestBody:
         *       content:
         *         application/json:
         *     responses:
         *       '200':
         *         description: Retorna un mensaje de aprobación
         *       '500':
         *         description: Retorna un mensaje de que se cayó el servidor
         *       '404':
         *         description: Retorna un mensaje de servicio no encontrado
         */
        router.post("/login", controller.loginUser);

        /**
         * Post track
         * @openapi
         * /api/auth/register:
         *   post:
         *     tags:
         *       - users
         *     summary: "Post register"
         *     description: Esta ruta permite registrar a un nuevo usuario
         *     requestBody:
         *       content:
         *         application/json:
         *           schema:
         *             $ref: "#/components/schemas/user"
         *     responses:
         *       '200':
         *         description: Retorna un mensaje de aprobación
         *       '500':
         *         description: Retorna un mensaje de que se cayó el servidor
         *       '404':
         *         description: Retorna un mensaje de servicio no encontrado
         */
        router.post("/register", controller.registerUser);

        return router;
    }
}
