import { UserSingleTypes, UsersTypes } from '../../types/';

export type UsersListActions = {
    type: string;
    data: UsersTypes[];
};

export type UsersSingleActions = {
    type: string;
    data: UserSingleTypes;
};
