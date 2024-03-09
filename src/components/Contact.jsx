import React, { useState } from 'react';

const Page1 = () => (
    <div>
        <h1>Page 1 Content</h1>
        <p>This is the content of page 1.</p>
    </div>
);

const Page2 = () => (
    <div>
        <h1>Page 2 Content</h1>
        <p>This is the content of page 2.</p>
    </div>
);

const App = () => {
    const [currentPage, setCurrentPage] = useState('page1');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <button onClick={() => handlePageChange('page1')}>Page 1</button>
            <button onClick={() => handlePageChange('page2')}>Page 2</button>

            {currentPage === 'page1' && <Page1 />}
            {currentPage === 'page2' && <Page2 />}
        </div>
    );
};

export default App;