import { avatarApi } from "./keys"

export const userAvatar = (username) => {
    return `${avatarApi}${username}`;
}