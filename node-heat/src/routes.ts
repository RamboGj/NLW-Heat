import { Router } from "express"
import { AuthenticateUserController } from "./controllers/authenticacteUserController"
import { createMessageController } from "./controllers/createMessageController"
import { Get3LastMessagesController } from "./controllers/getLast3MessagesController"
import { GetProfileUserController } from "./controllers/getProfileUserController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new createMessageController().handle)

router.get("/messages/last3", new Get3LastMessagesController().handle)

router.get("/profile", ensureAuthenticated, new GetProfileUserController().handle)


export { router }