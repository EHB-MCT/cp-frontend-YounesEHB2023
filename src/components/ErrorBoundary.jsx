import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI.
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={styles.notification}>
                    <p>Something went wrong:</p>
                    <p>{this.state.errorMessage}</p>
                </div>
            );
        }

        return this.props.children; 
    }
}

const styles = {
    notification: {
        padding: '20px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        border: '1px solid #f5c6cb',
        borderRadius: '5px',
        margin: '20px 0',
    },
};

export default ErrorBoundary;