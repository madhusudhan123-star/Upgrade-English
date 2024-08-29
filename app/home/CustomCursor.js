import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', updateCursorPosition);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="custom-cursor xsm:hidden sm:hidden md:hidden lg:block xl:block 2xl:block block"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;