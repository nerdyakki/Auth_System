import {Router} from "express";
const authRouter = Router();
authRouter.post("/register", (req, res) => {
    res.send("Register route");
})
export default authRouter;