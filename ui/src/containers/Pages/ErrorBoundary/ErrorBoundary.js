import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }


    //this is stupid delete later

    static getDerivedStateFromError(error) {
        /*const routingFunction = (path) => {
            history.push({
                pathname: `/target-path`,
            });
        }*/
        // Update state so the next render will show the fallback UI.
        switch (error) {
            case 500: {
                console.log(error.message)
                if (error.message.startsWith('JWT')) {
                    //routingFunction("/login");
                    // eslint-disable-next-line no-restricted-globals
                    history.push("/login");
                }
            }
                break;
            default:
                break;
        }
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.logErrorToMyService(error, errorInfo);
    }

    logErrorToMyService(error, errorInfo) {
        console.log(error);
    }


    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
