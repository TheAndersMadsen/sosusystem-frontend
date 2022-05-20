import {AddressDto} from "./address.dto";

export interface SubjectDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: AddressDto;
}
