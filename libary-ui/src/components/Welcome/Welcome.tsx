import {WelcomeProps} from "./types";

const Welcome = (props: WelcomeProps) => {
    const { user, salary = 2000 } = props;

    return (
        <>
            <div>
                Hello,
                <strong>{user.name}</strong>!
            </div>
            <div>
                Your surname is <i>{user.surname}</i>
            </div>
            <div>
                Your salary is <strong>{salary}</strong>
            </div>
        </>
    );
};

export default Welcome;
