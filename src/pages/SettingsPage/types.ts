import { EmailForm } from "../../UI/Forms/AuthForms/EmailForm/types";

export interface UserInfoForm extends EmailForm {
    nickname: string;
}