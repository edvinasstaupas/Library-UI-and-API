export interface User {
    name: string; // required to assign
    surname?: string; // optional to assign
}

export interface WelcomeProps {
    user: User;
    salary?: number;
}
