import {UsersWithDetailsDto} from "./users-with-details-dto.type";

type UsersSignUpResponseDto = {
    token: string;
    user: UsersWithDetailsDto
}

export {type UsersSignUpResponseDto};