import React from 'react';

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
        </div>
    );
};

export default Layout;
