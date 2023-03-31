import * as React from 'react';

const Button = ({ title, onClick, children }) => {
    return (React.createElement("button", { className: 'btn btn-primary', onClick: onClick, title: title }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
