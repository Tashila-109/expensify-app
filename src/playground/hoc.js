// HOC -> Higher Order Component = a comonents that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abastract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// Require authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the detail" />, document.getElementById('app'));
