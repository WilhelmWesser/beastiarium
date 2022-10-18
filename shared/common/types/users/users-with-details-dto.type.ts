import {UserDetailsResponseDto} from "../types";

type UsersWithDetailsDto = {
    id: number;
    email: string;
    fullName: string;
    userDetails: UserDetailsResponseDto;
}

export {type UsersWithDetailsDto};